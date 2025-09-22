let kelas = [
    {name: "Mike Wazowsky", age: 21, hobbies: ["Sleep", "Sleep", "Sleep"], nilai: [10, 10, 10]}, {name: "Bahlil Kodok", age: 19, hobbies: ["Korupsi", "Korupsi", "Korupsi"], nilai: [10, 10, 10]}, {name: "Luhut Pantat Hitam", age: 22, hobbies: ["Menggonggong", "Menggonggong", "Menggonggong"], nilai: [10, 10, 10]}
]

const cariNama = kelas.map(({ name}) => name)
console.log(cariNama.join(", "))

const mahasiswaTwentyPlus = kelas.filter((mahasiswa) => mahasiswa.age > 20)
console.log(mahasiswaTwentyPlus)

const rataRataNilai = kelas.map(mahasiswa => {
    const total = mahasiswa.nilai.reduce((acc, n) => acc + n, 0)
    const rataRata = total / mahasiswa.nilai.length;
    return {name: mahasiswa.name, rataRata: rataRata}
})
console.log(rataRataNilai)

const sortAge = [...kelas].sort((a, b) => a.age - b.age)
console.log(sortAge)