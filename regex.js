// defining a dictionary of regex for the bot to recognize and return
// suitable output

const patternDict = [{
    pattern: "\\b(Hi|Hello|Hey|Hola)\\b",
    intent: "Hello"
}, {
    pattern: "\\b(bye|exit)\\b",
    intent: "Exit"
}];

module.exports = patternDict;