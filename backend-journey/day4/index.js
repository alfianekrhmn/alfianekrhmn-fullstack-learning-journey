
// Import the motivateDeveloper function from motivation.js
const motivateDeveloper = require("./motivation")
const profile = require("./profile")

const developerName = "Alfian"
console.log(motivateDeveloper(developerName))


console.log(`Hi, my name's ${profile.name}, ${profile.age} years old`)
console.log(`Skills: ${profile.skills.join(", ")}`)
console.log(`Dream: ${profile.dream}`)