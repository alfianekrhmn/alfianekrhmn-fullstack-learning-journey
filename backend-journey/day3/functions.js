// Day 3 - Function in Javascript

// 1. Basic Function: process and print profile info
function showProfile(name, age, skills){
    console.log(`hi, my name is ${name}`)
    console.log(`i'm ${age} years old`)
    console.log(`my backend skills are: ${skills.join(", ")}`)
}

// Call (Execute) the function
showProfile("Alfian", 21, ["Javacript", "NodeJS", "MongoDB"])


// 2. Function that returns a value
function calculateExperience(startYear) {
    const currentYear = new Date().getFullYear()
    return currentYear - startYear
} 

let experience = calculateExperience(2023)
console.log(`I've been learning backend for ${experience} years.`)


// 3. Arrow Function shorter syntax
const getGoal = (goal, dreamPlace) => {
    return `My goal is to become a ${goal} and live in ${dreamPlace}`
}

console.log(getGoal("Fullstack Developer", "Singapore"))


console.log("=======================================================")

const motivateDeveloper = (name) => {
    return `keep going ${name}! Every line of code makes you stronger`
}

console.log(motivateDeveloper("Alfian"))