console.log("Double YAY!");


// Need the layers of the map, make the tiles here.
// Grayscale Map

var graymap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
});

var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-v9"
  //,
  //accessToken: API_KEY
});

var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/outdoors-v11",
  accessToken: API_KEY
});

// To the styling of the graymap. 
// Add the layers
var map = L.map("map", {
  center: [
    40.7, -94.5
  ],
  zoom: 3,
  layers: [graymap, satellitemap, outdoors]
});

// graymap goes onto the layermap here
graymap.addTo(map);

// NOW! We need layers for tectonic plates and earthquakes!
// Make the TECTONIC PLATES, KRONK!
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

// Object to hold the layers of our map tiles- only can see one of these (radio buttons) at a time

var baseMaps = {
  Satellite: satellitemap,
  Grayscale: graymap,
  Outdoors: outdoors
};

// Make overlays to be used together! 
// I shall call them Family Tiles! 

var overlays = {
  "Tectonic Plates": tectonicplates,
  Earthquakes: earthquakes
};

// But now we need something so that the user can swap out the visible layer with another.
// JavaScript Hatred Tectonic plates SHIFTING!!!!!
L
  .control
  .layers(baseMaps, overlays)
  .addTo(map);

// AJAX call to get the earthquake geoJSON data.
//JavaScript hatred earthquake IMMINENT!
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {

  // gonna need to style the earthquake data coming in.
  // pass the magnitude of the earthquake into two separate functions
  // for calculating the color and radius. Probably a better way to do it....but I'm not the most attenti...SQUIRREL!!!!
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // function to determine the color of the marker based on the magnitude of the earthquake.
  function getColor(depth) {
    switch (true) {
    case depth > 90:
      return "#b03706";
    case depth > 70:
      return "#ea822c";
    case depth > 50:
      return "#b29b07";
    case depth > 30:
      return "#dec630";
    case depth > 10:
      return "#20c049";
    default:
      return "#98ee00";
    }
  }

  // calculate radius of the earthquake marker based on its magnitude
  // It was at this point, that my hatred of JavaScript became quiet indignation.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }

    return magnitude * 4;
  }

  //add GeoJSON layer to the map once the file is loaded.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    // circleMarker style using styleInfo function.<--seems like there should be an easier way
    // Perhaps my brain simply rejects JavaScript, like the FlatEarthers reject the presence of shadows.
    style: styleInfo,
    // Need popups, rubric says so. 
    // guess people would like to see details of what they are looking at. 
    //FINE! MORE JAVASCRIPT. <I bought a tiny table to flip it here>.
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "Magnitude: "
          + feature.properties.mag
          + "<br>Depth: "
          + feature.geometry.coordinates[2]
          + "<br>Location: "
          + feature.properties.place
      );
    }
    //add data to the earthquake layer instead of directly to the map.
    //I swear this langauge requires so much EXPLICIT details for things to work. 
    
  }).addTo(earthquakes);

  // add the earthquake layer to the map. <flipped newly bought tiny dollhouse table here>
  earthquakes.addTo(map);

  // Here we create a legend control object.
  //because rubric says so, don't really want to at this point
  //family says I can not set my computer on fire after this code finally WORKS---<table flip>
  var legend = L.control({
    position: "bottomright"
  });

  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");

    var grades = [-10, 10, 30, 50, 70, 90];
    var colors = [
      "#98ee00",
      "#20c049",
      "#dec630",
      "#b29b07",
      "#ea822c",
      "#b03706"];
//fix my color array because I wrote it backwards <tiny table flip twice because it took 3hrs to figure it out>
// Loop through intervals and generate a labels
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML += "<i style='background: "
        + colors[i]
        + "'></i> "
        + grades[i]
        + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // after we created the legend earlier, guess what? It did not show up, magically in the webpage. <yep. tiny table flip>
  //add legend to the web page that we are literally building  and already wrote, but now it has to be EXPLICITLY CALLED
  legend.addTo(map);

  // AJAX call to get our Tectonic Plate geoJSON data.
  d3.json("/tectonic.json").then(function(platedata) {
      // add geoJSON data, and style <jazz hands>, to the tectonicplates layer
      
      L.geoJson(platedata, {
        color: "orange",
        weight: 2
      })
      .addTo(tectonicplates);

      // add the tectonicplates layer to the map.
      tectonicplates.addTo(map);
    });
});
