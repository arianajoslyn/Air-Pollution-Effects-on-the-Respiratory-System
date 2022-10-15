var yearTag = d3.select('#selYear');
var stateTag = d3.select('#selState');

var year_array = [];
var state_array = [];

d3.csv("Total_Respiratory_Deaths.csv").then(function (data) {

  data.forEach((row_data) => {
    // data.forEach(function (row_data) {  
    // data.map((row_data) => {
    // data.map(function (row_data) {
    if (year_array.indexOf(row_data["Year"]) === -1) {
      year_array.push(row_data.Year)
    }
    if (state_array.indexOf(row_data["state"]) === -1) {
      state_array.push(row_data["state"])
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
  //stateData = []
  stateyearData = []

  d3.csv("Total_Respiratory_Deaths.csv").then(function (data) {
    if (year) {
      yearData = data.filter(row => row.Year === year);
    }
    else {
      alert("Please select a year.")
    }

    if (state) {
      stateData = data.filter(row => row["state"] === state);

      stateyearData = stateData.filter(row => row.Year === year);
    }
    else {
      alert("Please select a state.")
    }

    var elements = document.getElementsByTagName('select');

    for (var i = 0; i < elements.length; i++) {
      elements[i].selectedIndex = 0;
    }

    months = []
    counts = []

    stateyearData.map((row) => {
      months.push(row.Month);
      counts.push(row.counts);

      var bar_data = {
        x: months,
        y: counts,
        type: 'line',
        mode: 'markers',
        orientation: "h",
        //line: { width: 10 }
      };
//console.log(level_counts)
      var bar_layout = {
        title: "Respiratory deaths in " + state + " in " + year,
        margin: { t: 30, l: 150 }
      };

      Plotly.newPlot("state_year", [bar_data], bar_layout);
    })

    const tbody = d3.select("tbody");

    // Table view
    tbody.html("");

    const tbl_header = tbody.append("tr");
    let header = tbl_header.append("th");
    header.text("State");
    header = tbl_header.append("th");
    header.text("Year");
    header = tbl_header.append("th");
    header.text("Month");
    header = tbl_header.append("th");
    header.text("Death Count");

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
