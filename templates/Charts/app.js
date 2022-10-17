// attempt--epic fail level


//i want to filter on state and year, each year a state has 5 categories of respiratory deaths that need displayed 
//these functions are awful and I hate them and google is an unhelpful heiffer.  
function buildMetadata(death) {
  d3.json("yr_avg_death.json").then((data) => {
    var metadata= data.metadata;
    var resultsarray= metadata.filter(state?/year? => 
    yr_avg_death == ?);
    var result= resultsarray[0]
    var panel = d3.select("#?-metadata");
    panel.html("");
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });

  



  });
}

// build chart function

function buildCharts(death) {

// Use d3 to bring in the yr_avg_death.json then loop through each row, appending to the variable `result`
d3.json("yr_avg_death.json").then((data) => {
  //i don't know what is going on here???
  var ?= data.year?state?;
  var resultsarray= ?.filter(? => 
  ?.? == ?);
  var result= resultsarray[0]

  var ids = result.?;
  var labels = result.?;
  var values = result.?;



//---------------------------------------------------------//
//---------------------------------------------------------//
              //  Build a BAR Chart
//---------------------------------------------------------//  
//---------------------------------------------------------// 
  var bar_data =[
    {
      y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      x:values.slice(0,10).reverse(),
      text:labels.slice(0,10).reverse(),
      type:"bar",
      orientation:"h"

    }
  ];

  var barLayout = {
    title: "States",
    margin: { t: 30, l: 150 },
  };

  Plotly.newPlot("bar", bar_data, barLayout);
});
}
 

function init() {
// drop down functionality for end user to select from each subject id
var selector = d3.select("#selDataset");

// Use the list of sample names to populate the select options
d3.json("yr_avg_death.json").then((data) => {
  var sampleNames = data.state;
  sampleNames.forEach((sample) => {
    selector
      .append("option")
      .text(sample)
      .property("value", sample);
  });

  // Use first sample from dataset to build opening plots
  const firstSample = sampleNames[0];
  buildCharts(firstSample);
  buildMetadata(firstSample);
});
}

function optionChanged(newSample) {
// refresh with new data each time a new sample is selected
buildCharts(newSample);
buildMetadata(newSample);
}



// Initialize the dashboard
init();