--Main table to perform joins(PK not possible on other tables having multiple occurrence 'State')
CREATE TABLE "States"
(
"State" varchar(150) UNIQUE NOT NULL,
PRIMARY KEY("State")
)
;
--Possible addition of city population tags on leaflet
CREATE TABLE "City_Population"
(
"City_Town" varchar(150),
"State" varchar(150),
"2020" int,
"2021" int,
"2022" int,
CONSTRAINT fk_Pop_state
      FOREIGN KEY("State") 
	  REFERENCES "States"("State")
)
;

--had a florida and tennesse town/village issue for 1 city in each on the city population dataset
--death rates for heatmaps and AQI comparisons
CREATE TABLE "cdc_death_rates" (
    
    "Jurisdiction of Occurrence" varchar ,
	"MMWR Year" int ,
	"MMWR Week" int ,
    "Week Ending Date" date ,
    "All Cause" int ,
    "Natural Cause" int ,
    "Septicemia" int ,
    "Malignant neoplasms" int ,
    "Diabetes mellitus" int ,
    "Alzheimer disease" int ,
    "Influenza and pneumonia" int ,
    "Chronic lower respiratory diseases" int ,
    "Other diseases of respiratory system" int ,
    "Nephritis, nephrotic syndrome and nephrosis" int ,
	"Symptoms, signs and abnormal clinical and laboratory findings" int ,
    "Diseases of heart" int ,
    "Cerebrovascular diseases" int ,
	"COVID-19 (Multiple Cause of Death)" int ,
	"COVID-19 (Underlying Cause of Death)" int,
	CONSTRAINT fk_cdc_state
      FOREIGN KEY("Jurisdiction of Occurrence") 
	  REFERENCES"States"("State")
    )
    ;
    
    
--AQI for comparing to population and deaths
CREATE TABLE "AQI_Observations"
(	
"State Code"	int,
"County Code"	 int,
"Site Num"	int,
"Parameter Code"	int,
"POC"	 int,
"Latitude"  decimal(10,5),	
"Longitude"  decimal(10,5),
"Datum"	varchar(5),
"Parameter Name"	varchar(50),
"Sample Duration"	varchar(50),
"Pollutant Standard"	varchar(150),
"Date Local"	date,
"Units of Measure"	varchar(50),
"Event Type"	varchar(50),
"Observation Count"	int,
"Observation Percent"	int,
"Arithmetic Mean"	decimal(10,6),
"1st Max Value"	decimal(10,3),
"1st Max Hour"	int,
"AQI"				int,
"State Name"		varchar(150),
"County Name"		varchar(150),
"City Name"		varchar(150),
CONSTRAINT fk_CO_state
      FOREIGN KEY("State Name") 
	  REFERENCES"States"("State")		
)
;

CREATE TABLE Pop_By_Year 
( "City_Town" varchar(150),
	"State" varchar(150),
	"Year" int,
	"Population" int,
CONSTRAINT fk_Pop_yr_state
      FOREIGN KEY("State") 
	  REFERENCES "States"("State"));