# Air-Pollution-Effects-on-the-Respiratory-System
Project 3

https://arianajoslyn.github.io/Air-Pollution-Effects-on-the-Respiratory-System/

## Summary
Studies show that air pollution increases the chances of respiratory illnesses and diseases. This project explored the air quality across the United States over the 2020-2022 range. The project rubric dictated `Plotly.js`, `Flask`, and `HTML` be leveraged to create an application displaying visual dashboards.

## Data
Data was obtained from several locations:
* CDC: [CDC Link!](https://data.cdc.gov/NCHS/Monthly-Provisional-Counts-of-Deaths-by-Select-Cau/9dzk-mvmi/data) To gather respiratory deaths by state and year.
* OpenWeather: [OpenWeather Link!](https://openweathermap.org/api/air-pollution) To gather Air Quality measurements and locations.
* EPA: [EPA Site for Facts!](https://www.epa.gov/clean-air-act-overview/air-pollution-current-and-future-challenges) To gather information on respiratory diseases.

## Process
<ul>
   <li>Obtained historical data on respiratory deaths in the United States for the years 2020-2022.</li>
   <li>Stored historical data in a PostgreSQL Database. </li>
<li>All cleaning, joining, and aggregation occurred within the database. (See the DDL and ERD folder for details).</li>

   <li><ul>Questions to determine what types of visualizations should be displayed:</li>
   <li>    How many people die each year in each state from a respiratory problem? </li>
   <li>    How many times a year does a state suffer from poor air quality?</li>
   <li>   Where are the air quality stations located in the United States? and What are their results?</li>
   <li>    What was the highest AQI Index category and death count for each state in any given year? </li>
</ul>
<li>Queried the database to attempt to answer these questions.</li>
<li>Extracted the data and loaded it into JavaScript files in CSV format. (Issues occurred when JSON conversion was attempted).</li>
<li>Created Interactive Plotly and Leaflet visualizations for end users to explore the data.</li>

## Conclusion
There was not enough time to correlate the death counts with the locations having increased counts of poor air quality- no conclusions were made.

