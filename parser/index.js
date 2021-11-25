'use strict';
// Parser is nothing but a function which returns the output in a more human readable
// format using the captured entities and intents.

//importing modules
const colors = require('colors');
const dictionary = require("./dictionary")

//function to describe temprature conditions
const getFeel = temp => {
    if (temp < 4) {
        return "Shivering Cold";
    }
    else if ( temp >= 5 && temp < 15) {
        return "Pretty Cold";
    }
    else if ( temp >= 15 && temp < 25) {
        return "Moderately Cold";
    }
    else if ( temp >= 25 && temp < 32) {
        return "Quite Warm";
    }
    else if ( temp >= 32 && temp < 40) {
        return "Hot";
    }
    else {
        return "Very Hot";
    }
};

//defining a function for prefixes in future/past/present etc.

const getPrefix = (conditionCode, tense = "present") => {
    // defining a variable findPrefix and iterating through each item of 
    // the array.
    let findPrefix = dictionary[tense].find(item =>{
        // detecting the presence of the condition code
        if (item.codes.indexOf(Number(conditionCode)) > -1){
            return true;
        }
    });
    // giving error here
    // conditionCode = "ok";
    // return findPrefix.getPrefix || " ";
    return "OK";
}

// function to return appropriate response
 const currentWeather = response => {
     // checks if location property is present or not
     if(response.location || response.current) {
         const {
             location,weather_descriptions, weather_code, temperature
         } = response;

         // defining the output
         return `Right now, ${getPrefix(weather_code)} At ${location}. It is ${getFeel(Number(temperature)).red} at ${String(temperature).blue} degree Celsius...`
     }
 }

 //creating the forecast weather function

 const forecastWeather = (response, data) => {
    
 }


 module.exports = currentWeather;