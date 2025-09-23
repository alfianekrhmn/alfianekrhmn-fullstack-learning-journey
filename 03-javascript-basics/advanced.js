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

const {name: studentName, age: studentAge} = mahasigma
console.log(studentName, studentAge)

let firstHobbies = ["Sleep", "Sleep", "Sleep", "Sleep"]
let secondHobbies = ["Running", "Running", "Running", "Running", ...firstHobbies]
console.log(secondHobbies)

function makan(callback){
    console.log("Sedang makan...")
    callback()
}

function minum() {
    console.log("Lanjut minum setelah makan")
}

makan(minum)

const loadData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded")
    }, 2000)
})

loadData
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log("Error : ", error)
    })


const loadingData = () => {
    return new Promise((resolved, ejected) => {
        setTimeout(() => {
            resolved("data still loading")
        }, 2000)
    })
}

async function getData() {
    try {
        const result = await loadingData()
        console.log(result)
    } catch (error) {
        console.log("Error: ", error)
    }
}

getData()