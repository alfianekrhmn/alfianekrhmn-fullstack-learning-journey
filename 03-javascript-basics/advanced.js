function perkalianPertama(a, b) {
    return a * b
}

const perkalianKedua = (a, b) => a * b

console.log(perkalianPertama(2, 4))
console.log(perkalianKedua(5, 3))

const greet = (name = "Guest") => `Hai... ${name}`
console.log(greet("Alfian"))
console.log(greet())

let mahasigma = {
    name: "Alfian",
    age: 32
}

const {name, age} = mahasigma
console.log(name, age)

let firstHobbies = ["Sleep", "Sleep", "Sleep", "Sleep"]
let secondHobbies = ["Running", "Running", "Running", "Running", ...firstHobbies]
console.log(secondHobbies)
