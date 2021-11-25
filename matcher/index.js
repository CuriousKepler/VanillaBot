'use strict';

//importing the modules
const patterns = require('C:\\Users\\Rishabh Sharma\\Desktop\\vanilla\\patterns');
const XRegExp = require('xregexp');

// the function takes in the users input and the pattern it matches
let createEntities = (str, pattern) => {
    // passing the users input into the exec() function
    return XRegExp.exec(str, XRegExp(pattern, "i"));
    // every output of the createEntities function is an object
     // corresponding to a Named Capture Group.
}

// defining functions
// str is the users input message(whatever user types goes into this function)
// cb is the callback function which fires the output, also contains
// and object which is a possible intent or entity
let matchPattern = (str, cb) => {
    //find() functions iterates through every item of the array
    let getResult = patterns.find(item =>{
            // this takes the xregexp, the users input(str) and 
            // the regex pattern
            // i is the ignore case flag
            if(XRegExp.test(str, XRegExp(item.pattern, "i"))){
                return true;
            }
    });
    // checking to see if getResult is not undefined using callback
    // if the expression matches, it simply returns the provided intent.
    if(getResult){
        return cb({
            intent: getResult.intent,
            entities: createEntities(str, getResult.pattern)
        });
    // returns empty output if regex is not matched
    } else{
        return cb({});
    }
}

module.exports = matchPattern;