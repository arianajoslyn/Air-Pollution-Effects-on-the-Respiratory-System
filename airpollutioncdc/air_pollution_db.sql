Drop Table "cdc_death_rates";

CREATE TABLE "cdc_death_rates" (
    "Data As Of" date ,
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
	"COVID-19 (Underlying Cause of Death)" int
    )
    ;

SELECT *
FROM cdc_death_rates;