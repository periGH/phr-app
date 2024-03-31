#!/bin/bash

# List of collections
collections=("doctorvisits" "labresults" "medications") # Update this array with collection names

# Loop through all collections and export each
for collection in "${collections[@]}"
do
   mongoexport --uri="mongodb+srv://USERNAME:PASSWORD@cluster0.4oufuir.mongodb.net/patientHealthRecordsDB" --collection=$collection --out="${collection}.json" 
   # --out="data/${collection}.json"
  
done