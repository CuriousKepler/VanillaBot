'use strict';

const { response } = require('express');
const { realpath } = require('fs');
// enable the creating of a REPL(Read Evauate Print Line) node.js app
// reading in a file, processing it line by line
const ReadLine = require('readline');

//use to configure 3 important properties
const rl = ReadLine.createInterface({
    // reads what user types
    input: process.stdin,

    // writes directly to the terminal
    output: process.stdout,

    //prevents cmd from behaving like a TTY(TellyType Terminal Interface)
    terminal: false
});

// importing external/created modules
const matcher = require('./matcher');
const patternDict = require('./patterns');
const patterns = require('./patterns');
const weather = require('./weather')
const currentWeather = require('./parser');
const { parse } = require('path');

// shows prompt on the interface
rl.setPrompt('> ');
rl.prompt();

// to process what the user is typing
// prints this every time the user hits enter
// rl.on('line', reply => {
//     console.log(`You replied ${reply}`);
//     rl.prompt();
// });

rl.on('line', reply => {
    // reply contains what the user had said and data contains
    // the returned object from matcher
    matcher(reply, data =>{
        switch(data.intent){
            // individual cases of intents for the switch
            case 'Hello':
                // calling the greetings named capture group
                // in the pattern function, what it does is that
                // it returns captures the entity the user has said
                // and returns EXACTLY that entity with "to you too!"
                console.log(`${data.entities.greeting} to you too!`)
                // to get out prompt back
                rl.prompt();
                break;
            // if user wants to exit
            case "Exit":
                console.log("Have a great day!")
                console.log("Exiting...")
                process.exit(0);
                break;
            case "CurrentWeather":
                //console.log(`Checking weather details for ${data.entities.city}...`)
                console.log("Let me check...")
                // here we get the weather details for the
                // entered city by an External API.
                weather(data.entities.city)
                    // registering the response from the PARSER
                    .then(response => {
                        let parseResult = currentWeather(response);
                        console.log(parseResult);
                        rl.prompt();
                    })
                    //catching errors
                    .catch(error =>{
                        console.log(error);
                        console.log("I cant fetch any weather details about this location. Sorry :(");
                    });
                // returns a huge json file
                rl.prompt();
                break;

            case "WeatherForecast":
                console.log("Let me check...");
                weather(data.entities.city)
                    .then(response => {
                        let parseResult = forecastWeather(responce, data.entities);
                        console.log(parseresult);
                        rl.prompt();
                    })
                    .catch(error =>{
                        console.log(error);
                        console.log("I cant fetch any weather details about this location. Sorry :(");
                    });
                rl.prompt();
                break;
                
            // if nothing matches, default state fires
            default: {
                console.log("I dont know what you mean")
                rl.prompt();
            }
        } 
    });
});