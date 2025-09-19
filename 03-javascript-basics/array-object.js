// const anakHaram = ["Jokowi", "Bahlil", "Prabowo", "Luhut"];
// console.log(anakHaram[0] , anakHaram[anakHaram.length - 1], ` Panjang dari arraynya adalah ${anakHaram.length}`);

// const makananFavorit = ["Nasi Goreng", "Mie Goreng", "Sate", "Bakso"];
// makananFavorit.push("Ikan Goreng");
// console.log(makananFavorit)

// makananFavorit.shift()
// console.log(makananFavorit)

// let myObj = {
//     name: "Alfian",
//     age: 21,
//     hobbies: ["sleep", "eat", "code"],
//     dream: "Fullstack Developer"
// }
// console.log(`Nama: ${myObj.name}, Umur: ${myObj.age}, Hobi: ${myObj.hobbies.join(", ")}, Cita-cita: ${myObj.dream}`)


// let kumpulanDataMahasiswa = [
//     {name: "Alfian", age: 21, dream: "Fullstack Developer"},
//     {name: "Budi", age: 22, dream: "Backend Developer"},
//     {name: "Cici", age: 20, dream: "UI/UX Designer"}
// ]

// console.log(kumpulanDataMahasiswa[0].name);

// for (const mahasiswa of kumpulanDataMahasiswa){
//     console.log(`Nama: ${mahasiswa.name}, Umur: ${mahasiswa.age}, Cita-cita: ${mahasiswa.dream}`);
// }

let produk = [
    {nama: "Indomie Goreng", harga: 40000, stok: 10},
    {nama: "Indomie Rebus", harga: 80000, stok: 5},
    {nama: "Indomie Kuah", harga: 60000, stok: 8}
]
const produkMapped = produk.map(produk => produk.nama)
console.log(produkMapped)

const produkFilter = produk.filter(produk => produk.harga > 50000)
console.log(produkFilter)

const produkReduce = produk.reduce((acc, produk) => acc + produk.harga * produk.stok, 0)
console.log(produkReduce)

const findProduk = produk.find(produk => produk.nama == "Indomie Kuah")
console.log(findProduk)

const sortingProduk = [...produk].sort((a, b) => a.harga - b.harga)
console.log(sortingProduk)