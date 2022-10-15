var yearTag = d3.select('#selYear');
var stateTag = d3.select('#selState');

var year_array = [];
var state_array = [];

d3.csv("AQI_By_Index_State_Year.csv").then(function (data) {

  data.forEach((row_data) => {
    // data.forEach(function (row_data) {  
    // data.map((row_data) => {
    // data.map(function (row_data) {
    if (year_array.indexOf(row_data["Year"]) === -1) {
      year_array.push(row_data.Year)
    }
    if (state_array.indexOf(row_data["State Name"]) === -1) {
      state_array.push(row_data["State Name"])
    }
  })

  yearTag
    .append("option")
    .property("value", "")
    .text("Select Year");

  year_array.forEach((year) => {
    yearTag
      .append("option")
      .property("value", year)
      .text(year);
  });

  stateTag
    .append("option")
    .property("value", "")
    .text("Select State");

  state_array.map((state) => {
    stateTag
      .append("option")
      .property("value", state)
      .text(state);
  });

});



function handleClick() {
  let year = d3.select("#selYear").property("value");
  let state = d3.select("#selState").property("value");

  // console.log("yearData")
  // console.log(year)

  yearDate = []
  stateData = []
  stateyearData = []

  d3.csv("AQI_By_Index_State_Year.csv").then(function (data) {
    if (year) {
      yearData = data.filter(row => row.Year === year);
    }
    else {
      alert("Please select a year.")
    }

    if (state) {
      stateData = data.filter(row => row["State Name"] === state);

      stateyearData = stateData.filter(row => row.Year === year);
    }
    else {
      alert("Please select a state.")
    }

    var elements = document.getElementsByTagName('select');

    for (var i = 0; i < elements.length; i++) {
      elements[i].selectedIndex = 0;
    }

    aqi_index = []
    level_counts = []

    stateyearData.map((row) => {
      aqi_index.push(row.aqi_index);
      level_counts.push(row.level_counts);

      var bar_data = {
        x: level_counts,
        y: aqi_index,
        type: 'bar',
        orientation: "h",
        line: { width: 10 }
      };

      var bar_layout = {
        title: "AQI of the state of " + state + " in " + year,
        margin: { t: 30, l: 150 }
      };

      Plotly.newPlot("state_year", [bar_data], bar_layout);
    })

    const tbody = d3.select("tbody");

    // Table view
    tbody.html("");

    const tbl_header = tbody.append("tr");
    let header = tbl_header.append("th");
    header.text("Year");
    header = tbl_header.append("th");
    header.text("State");
    header = tbl_header.append("th");
    header.text("AQI Index");
    header = tbl_header.append("th");
    header.text("Level Counts");

    yearData.map((row) => {
      const tbl_data = tbody.append("tr");

      Object.values(row).forEach((value) => {
        let cell = tbl_data.append("td");
        cell.text(value);
      });
    });
  })
}


d3.selectAll("#filter-btn").on("click", handleClick);
