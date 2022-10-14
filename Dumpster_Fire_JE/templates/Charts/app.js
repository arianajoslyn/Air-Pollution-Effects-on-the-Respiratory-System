// Belly Button Biodiversity - Plotly.js


  
function buildMetadata(AQI) {
  d3.json("AQI.json").then((data) => {
    var metadata= data.metadata;
    var resultsarray= metadata.filter(AQI => 
      AQI.aqi_index == AQI);
    var result= resultsarray[0]
    var panel = d3.select("#AQI-metadata");
    panel.html("");
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });

  



  });
}

// build chart function

function buildCharts(AQI) {

// Use d3 to bring in the samples.json then loop through each row, appending to the variable `result`
d3.json("AQI.json").then((data) => {
  var samples= data.AQI;
  var resultsarray= AQI.filter(AQI => 
  AQI.aqi_index == AQI);
  var result= resultsarray[0]

  var ids = result.aqi_index;
  var labels = result.aqi_index;
  var values = result.aqi_index;

//------------------------------------------------------//
//------------------------------------------------------//
          // Build a BUBBLE Chart 
//------------------------------------------------------//
//------------------------------------------------------//

  var LayoutBubble = {
    margin: { t: 0 },
    xaxis: { title: "OTU ID" },
    hovermode: "closest",
    
    };

    var DataBubble = [ 
    {
      x: ids,
      y: values,
      text: labels,
      mode: "markers",
      
      marker: {
        color: ids,
        size: values,
        colorscale: 'Jet'
        
        }
    }
  ];

  Plotly.newPlot("bubble", DataBubble, LayoutBubble);


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
    title: "Top 10 Bacteria Cultures Found",
    margin: { t: 30, l: 150 },
  };

  Plotly.newPlot("bar", bar_data, barLayout);
});
}
 

function init() {
// drop down functionality for end user to select from each subject id
var selector = d3.select("#selDataset");

// Use the list of sample names to populate the select options
d3.json("samples.json").then((data) => {
  var sampleNames = data.names;
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