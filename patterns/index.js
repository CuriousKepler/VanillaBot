// defining a dictionary of regex for the bot to recognize and return
// suitable output

const patternDict = [{
    // we use // instead of / to store as a string, not as a regex
    pattern: "\\b(?<greeting>Hi|Hello|Hey|Hola)\\b",
    intent: "Hello"
}, {
    pattern: "\\b(bye|exit)\\b",
    intent: "Exit"
}, {
    // creating a regex pattern to capture entities 
    // which match " like in New York/ Any other city name"
    pattern: "like\\sin\\s\\b(?<city>.+)",
    intent: "CurrentWeather"
}, {
    //creating a regex pattern for weather
    pattern: "\\b(?<weather>rainy|cloudy|sunny|rain|cloudy|misty|foggy|drizzle|snow|snowy)\\b\\sin\\s\\b(?<city>[a-z]+[a-z]+?)\\b(?<time>day\\safter\\stomrrow|tomorrow|today)$",
    intent: "WeatherForecast"
}, {
    pattern: "\\b(?<weather>rainy|cloudy|sunny|rain|cloudy|misty|foggy|drizzle|snow|snowy)\\b\\s\\b(?<time>day\\safter\\stomrrow|tomorrow|today)\\b\\sin\\s\\b(?<city>[a-z]+[a-z]+?)$",
    intent: "WeatherForecast"
}];

module.exports = patternDict;