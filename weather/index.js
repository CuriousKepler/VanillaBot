'use strict';

const axios = require("axios");
const apiKey = "4237d177cd952779835f84c080f16668";

// defining a function that take in the whole JSON as input and only returns
// the required output.
const formatData = data => {
    return {
        location: `${data.location.name}, ${data.location.country}`,
        temperature: data.current.temperature,
        condition: data.current.weather_descriptions,
        code: data.current.weather_code,
        date: data.location.localtime,
        wind_speed: data.current.wind_speed,
        wind_dir: data.current.wind_dir,
        pressure: data.current.pressure,
        precip: data.current.precip,
        humidity: data.current.humidity,
        feelslike: data.current.feelslike,
        visibility: data.current.visibility
        // for weatherstack forecast, paid
        // forecast: data.forecast.corecastday.map(day =>{
            // return {
            //     date: day.day.date ,
            //     code: day.day.condition.code,
            //     condition: day.day.condition.text
            // }
        }
}

// defining a function that
//informs apixu and requests the weather data.
const getWeather = location => {
    return new Promise(async (resolve, reject) =>{
            try{
                // weather api call
                const weatherConditions = await axios.get(
                    "http://api.weatherstack.com/current",
                        // ? access_key = apiKey,
                        // & query = location
                    {   // storing the api key(for production apps
                        // apikeys should be stored in secure files)
                        // defining parameters
                        params: {
                            // defines our api key
                            access_key: apiKey,
                            // defines the location that we have extracted
                            query: location,
                            // get forecast details for number of days
                            forecast_days: 3
                        }
                    })
                // once the parameters have been resolved, we will get the
                // weather details for the specified location.
                // passing the weatherCondition function as an argument
                // to the formatData function to fetch the required
                // objects/data.
                resolve(formatData(weatherConditions.data));
            
            //catching errors if any,
            } catch(error) {
                reject(error);
            }
    });
}

//exporting this as a module
module.exports = getWeather;