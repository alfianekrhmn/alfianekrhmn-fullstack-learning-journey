// day 2 - Javascript Basics for Backend

// 1. Variables (let = can change, const = can't change)
let username = "Alfian"
const age = 20

// 2. Data type
let isBackendDev = true
let skills = ['Javascript', 'NodeJS', 'Git']
let profile = {
    name: username,
    age: age,
    backend: isBackendDev
}

// 3. Output data
console.log("Name: ", profile.name)
console.log("Age: ", profile.age)
console.log("Skills: ", skills.join(", "))
console.log("Is Backend Developer: ", profile.backend)

// 4. simple logic
if(age >= 18){
    console.log("You're old enough to learn backend!")
}else{
    console.log("Keep learning, future dev!")
}


console.log("====================================")

let fullname = "Alfian Eka Rahman"
const myAge = 21

let isLearningBackend = true
let myBackendSkills = ["JS", "ExpressJS", "NodeJS", "MongoDB", "RestfullAPI"]
let future = "Web Developer"
let dream = "Living at Singapore"

let myProfile = {
    name: fullname,
    ages: myAge,
    isLearningBackend: isLearningBackend,
    myFuture: future,
    myDream: dream
}

console.log(`My name's ${myProfile.name}`)
console.log(`i am ${myProfile.ages} years old`)
console.log(`Still learn Backend skill: ${myProfile.isLearningBackend}`)
console.log(`My backend skills: ${myBackendSkills.join(", ")}`)
console.log(`My future is ${myProfile.myFuture}`)
console.log(`I wanna living at ${myProfile.myDream}`)

if(isBackendDev){
    console.log(`Keep going, ${myProfile.name}`)
}else{
    console.log(`Nice! You've mastered backend skills already`)
}