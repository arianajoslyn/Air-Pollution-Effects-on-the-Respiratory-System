--Testing a theory
--averages smooth the data out way too much
--a count of the occurences by the AQI_Index column may give insights

SELECT a."Year",a."State Name",a."aqi_index",COUNT(a."aqi_index") as level_counts
FROM "aqi_conversion" a
WHERE a."aqi_index" IS NOT NULL
GROUP BY a."State Name",a."Year", a."aqi_index";