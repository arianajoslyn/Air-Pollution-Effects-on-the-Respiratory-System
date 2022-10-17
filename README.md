# Air-Pollution-Effects-on-the-Respiratory-System
Project 3

https://arianajoslyn.github.io/Air-Pollution-Effects-on-the-Respiratory-System/

## Summary
Studies show that air pollution increases the chances of respiratory illnesses and diseases. This project explored the air quality across the United States over the 2020-2022 range. The project rubric dictated `Plotly.js`, `Flask`, and `HTML` be leveraged to create an application displaying visual dashboards.

## Data
Data was obtained from several locations:
* CDC: [CDC Link!](https://data.cdc.gov/NCHS/Monthly-Provisional-Counts-of-Deaths-by-Select-Cau/9dzk-mvmi/data) 
* OpenWeath: [OpenWeather Link!](https://openweathermap.org/api/air-pollution)
* EPA: [EPA Site for Facts!](https://www.epa.gov/clean-air-act-overview/air-pollution-current-and-future-challenges)

## Process
Obtained historical data on respiratory deaths in the United States for the years 2020-2022.
Stored historical data in a PostgreSQL Database. 
All cleaning, joining, and aggregation occurred within the database. (See the DDL and ERD folder for details).
Questions to determine what types of visualizations should be displayed:
    * How many people die each year in each state from a respiratory problem?
    * How many times a year does a state suffer from poor air quality?
    * Where are the air quality stations located in the United States? and What are their results?
    * A fourth question goes here if we have more time to do another chart
Queried the database to attempt to answer these questions.
Extracted the data and loaded it into JavaScript files in CSV format. (Issues occurred when JSON conversion was attempted).
Created Interactive Plotly and Leaflet visualizations for end users to explore the data.

## Conclusion
There was not enough time to correlate the death counts with the locations having increased counts of poor air quality- no conclusions were made.

