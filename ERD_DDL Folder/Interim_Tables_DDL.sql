CREATE TABLE AQI_Conversion AS(
SELECT 
	"City Name",
	"State Name",
	"AQI", 
	DATE_PART('month' , "Date Local") as "Month",
	DATE_PART('year' , "Date Local")as "Year",
	CASE
	WHEN "AQI">300
		THEN 'Hazardous'
	WHEN "AQI">200
		THEN 'Very Unhealthy'
	WHEN "AQI">150
		THEN 'Unhealthy'
	WHEN "AQI">100
		THEN 'Unhealthy for Sensitive Groups'
	WHEN "AQI">50
		THEN 'Moderate'
	WHEN "AQI">=0
		THEN 'Good'
	END AS AQI_INDEX
FROM "AQI_Observations");
CREATE TABLE AVG_AQI AS(
SELECT 
	"City Name",
	"State Name",
	SUM("AQI")/COUNT("AQI") as AVG_AQI,
	"Month",
	"Year"
FROM aqi_conversion
GROUP BY "City Name","State Name", "Month","Year"
	);
select * from "City_Population"

SELECT 
*,
	CASE
	WHEN "avg_aqi">300
		THEN 'Hazardous'
	WHEN "avg_aqi">200
		THEN 'Very Unhealthy'
	WHEN "avg_aqi">150
		THEN 'Unhealthy'
	WHEN "avg_aqi">100
		THEN 'Unhealthy for Sensitive Groups'
	WHEN "avg_aqi">50
		THEN 'Moderate'
	WHEN "avg_aqi">=0
		THEN 'Good'
	END AS AQI_INDEX
FROM avg_aqi;

CREATE TABLE death_rate_conversion AS
(
select 
	"Jurisdiction of Occurrence" as State,
	"MMWR Year" as "Year",
	DATE_PART('month' , "Week Ending Date") as "Month",
	SUM("Natural Cause")/COUNT("Natural Cause") as "Avg_Natural_Cause",
	SUM("Septicemia")/COUNT("Septicemia") as "Avg_Septicemia",
	SUM("Malignant neoplasms")/COUNT("Malignant neoplasms") as "Avg_Malignant_neoplasms",
	SUM("Diabetes mellitus")/COUNT("Diabetes mellitus") as "Avg_Diabetes_mellitus",
	SUM("Alzheimer disease")/COUNT("Alzheimer disease") as "Avg_Alzheimer_disease",
	SUM("Influenza and pneumonia")/COUNT("Influenza and pneumonia") as "Avg_Influenza_and_pneumonia",
	SUM("Chronic lower respiratory diseases")/COUNT("Chronic lower respiratory diseases") as "Avg_Chronic_lower_respiratory_diseases",
	SUM("Other diseases of respiratory system")/COUNT("Other diseases of respiratory system") as "Avg_Other_diseases_of_respiratory_system",
	SUM("Nephritis, nephrotic syndrome and nephrosis")/COUNT("Nephritis, nephrotic syndrome and nephrosis") as "Avg_Nephritis_nephrotic_syndrom_and_nephrosis",
	SUM("Symptoms, signs and abnormal clinical and laboratory findings")/COUNT("Symptoms, signs and abnormal clinical and laboratory findings") as "Avg_Symptoms_signs_abnormal_clinical_laboratory_findings",
	SUM("Diseases of heart")/COUNT("Diseases of heart") as "Avg_Diseases_of_heart",
	SUM("Cerebrovascular diseases")/COUNT("Cerebrovascular diseases") as "Avg_Cerebrovascular_diseases",
	SUM("COVID-19 (Underlying Cause of Death)")/COUNT("COVID-19 (Underlying Cause of Death)") as "Avg_COVID-19 (Underlying Cause of Death)",
	SUM("COVID-19 (Multiple Cause of Death)")/COUNT("COVID-19 (Multiple Cause of Death)") as "Avg_COVID-19 (Multiple Cause of Death)"
	FROM "cdc_death_rates"
	GROUP BY "Jurisdiction of Occurrence",DATE_PART('month' , "Week Ending Date"),"MMWR Year"
	)
	
SELECT * FROM death_rate_conversion;
CREATE TABLE aqi_pre_join AS (

SELECT 
	a."Year",
	a."State Name",
	ROUND(SUM(a."avg_aqi")/COUNT(a."avg_aqi") ,1)as "Yearly_Avg_AQI"
FROM "avg_aqi" a
GROUP BY a."State Name", a."Year"
	);
	
CREATE TABLE death_pre_join AS (
SELECT
"state",
"Year",
ROUND(SUM("Avg_COVID-19 (Underlying Cause of Death)")/COUNT("Avg_COVID-19 (Underlying Cause of Death)"),2) AS "Yearly_Avg_COVID_Underlying_Cause",
ROUND(SUM("Avg_COVID-19 (Multiple Cause of Death)")/COUNT("Avg_COVID-19 (Multiple Cause of Death)"),2) AS "Yearly_Avg_COVID_Multiple_Cause",
ROUND(SUM("Avg_Other_diseases_of_respiratory_system")/COUNT("Avg_Other_diseases_of_respiratory_system"),2) AS "Yearly_Avg_Other_Respiratory_Causes",
ROUND(SUM("Avg_Chronic_lower_respiratory_diseases")/COUNT("Avg_Chronic_lower_respiratory_diseases"),2) AS "Yearly_Avg_Chronic_Lower_Respiratory_Diseases_Causes",
ROUND(SUM("Avg_Influenza_and_pneumonia")/COUNT("Avg_Influenza_and_pneumonia"),2) AS "Yearly_Avg_Flu_Pneumonia_Causes"
FROM "death_rate_conversion" a
GROUP BY a."state",a."Year"
);


CREATE TABLE pop_pre_join AS
(
SELECT
 a."State",
a."Year",
ROUND(SUM(a."Population")/COUNT(a."Population"),2) as "Yearly_Avg_Population"
FROM "pop_by_year" a
GROUP BY a."State",a."Year");


CREATE TABLE GOAT_Table AS (
SELECT 
a."State Name",
a."Year",
a."Yearly_Avg_AQI",
b."Yearly_Avg_COVID_Multiple_Cause",
b."Yearly_Avg_COVID_Underlying_Cause",
b."Yearly_Avg_Other_Respiratory_Causes",
b."Yearly_Avg_Chronic_Lower_Respiratory_Diseases_Causes",
b."Yearly_Avg_Flu_Pneumonia_Causes",
c."Population",
CASE
	WHEN a."Yearly_Avg_AQI">300
		THEN 'Hazardous'
	WHEN a."Yearly_Avg_AQI">200
		THEN 'Very Unhealthy'
	WHEN a."Yearly_Avg_AQI">150
		THEN 'Unhealthy'
	WHEN a."Yearly_Avg_AQI">100
		THEN 'Unhealthy for Sensitive Groups'
	WHEN a."Yearly_Avg_AQI">50
		THEN 'Moderate'
	WHEN a."Yearly_Avg_AQI">=0
		THEN 'Good'
	END AS AQI_INDEX
FROM "aqi_pre_join" a
JOIN "death_pre_join" b
	ON a."State Name"=b."state"
JOIN "pop_by_year" c
	ON a."State Name"=c."State"
);

SELECT * FROM GOAT_Table;