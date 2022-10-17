// Create a map object.
var myMap = L.map("map", {
  center: [40.34139, -111.71361],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a markerSize() function that will give each city a different radius based on its population.
function markerSize(AQI) {
  return Math.sqrt(AQI) * 20000;
}

// Each city object contains the city's name, location, and population.
// Population Data Source: U.S. 2020 Decennial Census
var Data =  [
  {
    Latitude: [40.34139, -111.71361],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.34139, -111.71361],
    AQI: 0,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.00956, -66.62725],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 11,
    Date_Local: "4/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 9,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.19871, -66.05224],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 43,
    Date_Local: "4/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 34,
    Date_Local: "6/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.42009, -66.15062],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.4226, -66.12001],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.44981, -66.05251],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.44981, -66.05251],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.44981, -66.05251],
    AQI: 34,
    Date_Local: "6/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [18.44981, -66.05251],
    AQI: 16,
    Date_Local: "7/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [18.44981, -66.05251],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.44981, -66.05251],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [18.44981, -66.05251],
    AQI: 14,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 6,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.30758, -157.85542],
    AQI: 3,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 0,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 0,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 0,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 1,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [21.32375, -158.08861],
    AQI: 2,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.78547, -80.28421],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.78547, -80.28421],
    AQI: 1,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 0,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 0,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 0,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 0,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [25.79871, -80.21005],
    AQI: 0,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.05389, -80.25694],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 9,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 10,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 9,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 8,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 8,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 9,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 9,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [26.13268, -80.16982],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 17,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.51746, -99.51522],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 1,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.83441, -82.66525],
    AQI: 5,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 9,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 1,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.95513, -82.46953],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 1,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 1,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [27.96565, -82.2304],
    AQI: 5,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 7,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 8,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 7,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [28.59639, -81.3625],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.52943, -98.3914],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.67003, -95.12851],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 10,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.73373, -95.25759],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 14,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 8,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 8,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 11,
    Date_Local: "8/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 16,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [29.81453, -95.38769],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [29.99601, -90.11819],
    AQI: 19,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 1,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.0925, -84.16111],
    AQI: 2,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 10,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [30.26278, -81.60683],
    AQI: 14,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 15,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [30.35386, -97.69166],
    AQI: 15,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 8,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [30.46198, -91.17922],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.65309, -97.0707],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 13,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76569, -106.45523],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 10,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.76829, -106.50124],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [31.86247, -106.5473],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.20739, -110.91062],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.29515, -110.9823],
    AQI: 3,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 11,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.32911, -90.18272],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.66475, -97.33792],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 11,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 11,
    Date_Local: "4/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.67618, -115.48307],
    AQI: 15,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.78957, -116.94431],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.82006, -96.86012],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 13,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 14,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 11,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 9,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 8,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 6,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 8,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 7,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 13,
    Date_Local: "10/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [32.98544, -117.08218],
    AQI: 13,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.29896, -111.88426],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 0,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.36985, -112.62068],
    AQI: 7,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 13,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 9,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 14,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 16,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 13,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 8,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 9,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.40314, -112.07526],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 13,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 7,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41018, -111.86536],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 8,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.41046, -112.00264],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 16,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 13,
    Date_Local: "11/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.45797, -112.04659],
    AQI: 16,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.45797, -112.04660],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.45797, -112.04661],
    AQI: 9,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04662],
    AQI: 8,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04663],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04664],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04665],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04666],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04667],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04668],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.45797, -112.04669],
    AQI: 20,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.45797, -112.04670],
    AQI: 14,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.46173, -112.12796],
    AQI: 33,
    Date_Local: "1/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.46173, -112.12796],
    AQI: 22,
    Date_Local: "1/1/21",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.46173, -112.12796],
    AQI: 15,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.46173, -112.12796],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.46173, -112.12797],
    AQI: 16,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.46173, -112.12798],
    AQI: 11,
    Date_Local: "3/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.46173, -112.12799],
    AQI: 8,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.46173, -112.12800],
    AQI: 8,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.46173, -112.12801],
    AQI: 8,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.46173, -112.12802],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.46173, -112.12803],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.46173, -112.12804],
    AQI: 8,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.46173, -112.12804],
    AQI: 15,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.46173, -112.12804],
    AQI: 28,
    Date_Local: "11/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.46173, -112.12804],
    AQI: 19,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 34,
    Date_Local: "1/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 40,
    Date_Local: "1/1/21",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 15,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 7,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 7,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 17,
    Date_Local: "11/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.48378, -112.14256],
    AQI: 18,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 15,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 10,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 14,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 23,
    Date_Local: "11/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.48378, -112.14257],
    AQI: 15,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 1,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 0,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.915],
    AQI: 7,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.48556, -86.916],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 17,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 22,
    Date_Local: "1/1/21",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09577],
    AQI: 14,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 15,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 19,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.50383, -112.09578],
    AQI: 13,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.52143, -86.84411],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84411],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84411],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84411],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84411],
    AQI: 1,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84411],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 10,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 9,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84417],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.52143, -86.84412],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.55306, -86.815],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.63003, -117.67593],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.67649, -117.33098],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.6878, -84.2905],
    AQI: 13,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 13,
    Date_Local: "3/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 10,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 8,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 9,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 9,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 14,
    Date_Local: "5/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 10,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 7,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 8,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 7,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 14,
    Date_Local: "10/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.7784, -84.3914],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 17,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 13,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 15,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 19,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 11,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 10,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 10,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 9,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 9,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 7,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 8,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 9,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 14,
    Date_Local: "10/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 9,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.81931, -117.91876],
    AQI: 16,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 15,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 17,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.83062, -117.93845],
    AQI: 15,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.85275, -116.54101],
    AQI: 2,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 14,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 24,
    Date_Local: "2/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 17,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 14,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 26,
    Date_Local: "12/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 42,
    Date_Local: "1/1/21",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 9,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 11,
    Date_Local: "4/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 17,
    Date_Local: "10/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 14,
    Date_Local: "11/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.90139, -118.205],
    AQI: 16,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 13,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 10,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 7,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.92513, -117.95264],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.95507, -118.43049],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99636, -117.4924],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 8,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 10,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 7,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 7,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [33.99958, -117.41601],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 11,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 10,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 13,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 13,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 10,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 8,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.01029, -118.0685],
    AQI: 16,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 10,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 7,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.05111, -118.45636],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 14,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 14,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 16,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 15,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 9,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 8,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 10,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 8,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 17,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 8,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06659, -118.22688],
    AQI: 17,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 8,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06703, -117.7514],
    AQI: 13,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 11,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 8,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 9,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.06812, -117.52579],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.09396, -80.9623],
    AQI: 0,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 11,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 7,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10002, -117.49201],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10374, -117.62914],
    AQI: 8,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 8,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 14,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 13,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 7,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.10668, -117.27406],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1326, -118.1272],
    AQI: 17,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 7,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92391],
    AQI: 15,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.1365, -117.92392],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85036],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.14435, -117.85037],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 11,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 10,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 14,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.19925, -118.53276],
    AQI: 18,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.38344, -118.5284],
    AQI: 3,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 0,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 0,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.48974, -120.04692],
    AQI: 1,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 10,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.51096, -117.32554],
    AQI: 5,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 0,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.63782, -120.4575],
    AQI: 7,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.66974, -118.13051],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2813],
    AQI: 7,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.75619, -92.2814],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.89398, -117.0248],
    AQI: 3,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [34.94287, -120.43561],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.01708, -106.65739],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1343, -106.5852],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.1517, -89.85025],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.16126, -89.87065],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 10,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.21317, -80.87408],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 9,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.2401, -80.78568],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.100000],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.100000],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.100000],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.100000],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.100000],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.100000],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99996],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99997],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99997],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.33161, -118.99997],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 10,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 10,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 8,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 13,
    Date_Local: "5/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 11,
    Date_Local: "6/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 13,
    Date_Local: "7/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 10,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 8,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.50307, -97.57798],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.61413, -97.47508],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.63348, -83.94161],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.75074, -94.6697],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.85611, -78.57417],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [35.8652, -78.8197],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.04871, -115.05294],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.04871, -115.05294],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.04871, -115.05294],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.04871, -115.05294],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.04871, -115.05294],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 8,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.13971, -115.17565],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 23,
    Date_Local: "1/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 19,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 17,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.14188, -115.07874],
    AQI: 19,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.1424, -86.7341],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 26,
    Date_Local: "1/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 19,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 18,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.16396, -115.11393],
    AQI: 20,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.2049, -95.97654],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.27059, -115.23828],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.27059, -115.23828],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.27059, -115.23828],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.27059, -115.23828],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.27059, -115.23828],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.27059, -115.23828],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.27059, -115.23828],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.31887, -115.58613],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 10,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 0,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 0,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 0,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 1,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.69426, -121.62327],
    AQI: 3,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 11,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 7,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 6,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7775],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 9,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 16,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.71083, -119.7776],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 9,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 10,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77321],
    AQI: 16,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 15,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 13,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 19,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.78538, -119.77322],
    AQI: 17,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 10,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71643],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 11,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [36.81945, -119.71644],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [36.85555, -76.30135],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10258, -107.87022],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10258, -107.87022],
    AQI: 3,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 0,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.10373, -76.38702],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13179, -86.14295],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 1,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.13678, -107.62863],
    AQI: 2,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.28342, -79.88452],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 13,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 14,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 9,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 18,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 19,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 15,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 10,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 9,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 7,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 8,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 10,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.33814, -121.84978],
    AQI: 14,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 14,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 15,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 17,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 15,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 11,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.3485, -121.8949],
    AQI: 15,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33078],
    AQI: 1,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.36068, -118.33079],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.48293, -122.20337],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.55652, -77.40027],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 9,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.59088, -77.46925],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 18,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 14,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 14,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.64217, -120.99421],
    AQI: 17,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 7,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 10,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 8,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90302],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 8,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 13,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.70122, -121.90303],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16994],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 15,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.74307, -122.16995],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 10,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.76595, -122.39904],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 8,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 9,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26338],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.79362, -122.26339],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 16,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 10,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 10,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28235],
    AQI: 16,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 10,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 14,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.81478, -122.28236],
    AQI: 15,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 8,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 7,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30274],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 14,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 13,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.86477, -122.30275],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 5,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02615],
    AQI: 8,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 16,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.93601, -122.02616],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 11,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 14,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 15,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 8,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 0,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.95074, -121.26852],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35681],
    AQI: 8,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 8,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 10,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.9604, -122.35682],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 8,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97231, -122.52],
    AQI: 8,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [37.97768, -87.59684],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 7,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 13,
    Date_Local: "3/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 11,
    Date_Local: "4/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64192],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 8,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 14,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.00631, -121.64193],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 11,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 15,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 19,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 13,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 13,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 11,
    Date_Local: "4/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 1,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.10251, -122.23798],
    AQI: 11,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.1936, -85.7119],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.22876, -85.65452],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 24,
    Date_Local: "10/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.27885, -122.27502],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.34626, -81.62116],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 14,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 2,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.40377, -122.81829],
    AQI: 8,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 14,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 11,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 8,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.59332, -121.5038],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 14,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 11,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 13,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.61378, -121.36801],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.63114, -90.28115],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.65643, -90.19835],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.76835, -77.18347],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 10,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 7,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 10,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8309, -104.83924],
    AQI: 13,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.8577, -77.05922],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 8,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 10,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 9,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.89477, -76.95343],
    AQI: 20,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 5,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 8,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [38.92185, -77.01318],
    AQI: 18,
    Date_Local: "12/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.04791, -94.45051],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.05528, -76.87833],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.11722, -94.63561],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.12886, -84.50404],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14313, -76.84611],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 10,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.14603, -84.53838],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.31083, -76.47444],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 9,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 10,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.52193, -119.7954],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 11,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 13,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 15,
    Date_Local: "10/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 15,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.54092, -119.74676],
    AQI: 14,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.70595, -79.012],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 10,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 11,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 10,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 18,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 9,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 6,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 7,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 10,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 9,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 7,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73217, -105.0153],
    AQI: 8,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.73944, -75.55806],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 8,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 14,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 7,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.75118, -104.98763],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 6,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 1,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 5,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84047],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.76168, -121.84048],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 11,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 14,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 6,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 5,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.77949, -105.00518],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 8,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.78793, -86.13088],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.81083, -86.11444],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83562, -84.72052],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 11,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 11,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 7,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 7,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 6,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.83812, -104.94984],
    AQI: 7,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 0,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 0,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.92002, -77.30968],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.93456, -75.12522],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.9679, -80.7464],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 10,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 9,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.98884, -75.20721],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [39.99139, -75.08083],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05278, -88.37251],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.05417, -74.98517],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.11107, -83.06542],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.30972, -78.915],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.33293, -80.9334],
    AQI: 0,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 13,
    Date_Local: "4/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 6,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 3,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 5,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.38637, -104.73744],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 14,
    Date_Local: "6/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 9,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.43743, -79.86357],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.44337, -79.99029],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.46542, -79.96076],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 9,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 6,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 7,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 5,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 2,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.57747, -105.07892],
    AQI: 9,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.59806, -111.89417],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 9,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.64144, -74.20837],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66244, -74.21485],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.66288, -111.90119],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.72099, -74.19289],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73165, -74.06631],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73165, -74.06631],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73165, -74.06631],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73165, -74.06631],
    AQI: 8,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73165, -74.06631],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73165, -74.06631],
    AQI: 8,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73165, -74.06631],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73614, -73.82153],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73639, -111.87222],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.73926, -73.81769],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 5,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 3,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 5,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 2,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 0,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17949],
    AQI: 5,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77678, -124.17950],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.77715, -111.94585],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.78422, -111.931],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.81976, -73.94825],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.85355, -73.96618],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [40.8679, -73.87809],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.18223, -104.77833],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.24749, -95.97314],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 9,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 8,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 9,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 9,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.25918, -96.02863],
    AQI: 10,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 7,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 6,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 5,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 6,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.3014, -72.90287],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 0,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.30361, -111.98787],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44013, -81.49483],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.44278, -75.62306],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 10,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.49212, -81.67845],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 26,
    Date_Local: "3/1/20",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 10,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 8,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.50461, -81.69045],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.53001, -90.58761],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.57862, -87.55741],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 5,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 5,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 3,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 5,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 8,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.77144, -72.67992],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 2,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 1,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.82134, -73.29726],
    AQI: 10,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 9,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 6,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 15,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [41.8295, -71.41746],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [41.84104, -71.36097],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.09142, -77.20978],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.12023, -72.5845],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14, -87.79923],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.14175, -80.03861],
    AQI: 0,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.22862, -83.2082],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.26396, -71.79432],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 0,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 0,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.27001, -83.16259],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 7,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 0,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28187, -83.15142],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28307, -83.16115],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.28945, -83.15344],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.29582, -83.12943],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.31216, -83.09194],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.32519, -71.05606],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.32519, -71.05606],
    AQI: 0,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.32519, -71.05606],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.32519, -71.05606],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.32519, -71.05606],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 13,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.3295, -71.0826],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 8,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 8,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 7,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 8,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 11,
    Date_Local: "9/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 7,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.386, -83.26619],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86183, -71.87863],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.86253, -71.38014],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.87691, -78.80953],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.92111, -78.76583],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.93257, -87.93434],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 5,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 6,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 8,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 6,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 0,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [42.98417, -85.67134],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.10128, -105.49893],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14501, -77.55728],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.14618, -77.54817],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.46611, -88.62111],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.54792, -96.70077],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 3,
    Date_Local: "1/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 2,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [43.6007, -116.34785],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.60806, -72.98278],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 11,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 8,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 7,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 5,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.61638, -116.20382],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [43.66025, -70.26897],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37306, -110.83083],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.37705, -68.2609],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 6,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.4762, -73.2106],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.52839, -72.86884],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.65701, -111.08962],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 3,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.70612, -93.2858],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 0,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.76323, -93.03255],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.77553, -93.06299],
    AQI: 3,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 6,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 8,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 6,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.96524, -93.25476],
    AQI: 13,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 7,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 5,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 7,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 8,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 7,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [44.981, -93.27372],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 6,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 3,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 3,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 5,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 3,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.13768, -93.20762],
    AQI: 5,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 3,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 5,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 6,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 8,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.3935, -122.74789],
    AQI: 9,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 7,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [45.49664, -122.60288],
    AQI: 11,
    Date_Local: "12/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [46.69643, -68.03301],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.69643, -68.03301],
    AQI: 6,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.69643, -68.03301],
    AQI: 5,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.69643, -68.03301],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.69643, -68.03301],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.69643, -68.03301],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.82543, -100.76821],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 2,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [46.8505, -111.98716],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 1,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 2,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 2,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 2,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 2,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 5,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 5,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.56824, -122.30863],
    AQI: 2,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 3,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 3,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 6,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 6,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 9,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 10,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [47.59722, -122.31972],
    AQI: 6,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "1/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 2,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "11/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [48.29786, -124.62491],
    AQI: 1,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 24,
    Date_Local: "1/1/21",
    AQI_index: "Unhealthy"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 16,
    Date_Local: "2/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 8,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 3,
    Date_Local: "4/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 6,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 3,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 3,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 6,
    Date_Local: "9/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 7,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 6,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 2,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 11,
    Date_Local: "1/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 15,
    Date_Local: "2/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 3,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 5,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 2,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 3,
    Date_Local: "9/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 3,
    Date_Local: "10/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 17,
    Date_Local: "11/1/20",
    AQI_index: "Moderate"
  },
  {
    Latitude: [61.20586, -149.8246],
    AQI: 7,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 7,
    Date_Local: "2/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 14,
    Date_Local: "1/1/21",
    AQI_index: "Moderate"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 3,
    Date_Local: "2/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 3,
    Date_Local: "3/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 1,
    Date_Local: "5/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 2,
    Date_Local: "6/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 2,
    Date_Local: "7/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 1,
    Date_Local: "8/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 3,
    Date_Local: "10/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 3,
    Date_Local: "11/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 6,
    Date_Local: "12/1/21",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 7,
    Date_Local: "3/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 5,
    Date_Local: "4/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 2,
    Date_Local: "5/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 5,
    Date_Local: "6/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 1,
    Date_Local: "7/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72741],
    AQI: 3,
    Date_Local: "8/1/20",
    AQI_index: "Good"
  },
  {
    Latitude: [64.84569, -147.72748],
    AQI: 8,
    Date_Local: "12/1/20",
    AQI_index: "Good"
  }
];


// Loop through the cities array, and create one marker for each city object.
for (var i = 0; i < Data.length; i++) {
  L.circle(Data[i].Latitude, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius to equal the output of our markerSize() function:
    // This will make our marker's size proportionate to its population.
    radius: markerSize(Data[i].AQI)
  }).bindPopup(`<h1>${Data[i].AQI_index}</h1> <hr> <h3>AQI: ${Data[i].AQI.toLocaleString()}</h3>`).addTo(myMap);
}
