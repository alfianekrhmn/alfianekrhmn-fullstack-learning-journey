function buatTabungan() {
    let saldoAwal = 0

    function deposit(jumlah) {
        saldoAwal += jumlah
    }

    function cekSaldo() {
        console.log(`Saldo sekarang: ${saldoAwal}`)
    }

    return {deposit, cekSaldo}
}

const tabunganSaya = buatTabungan();
tabunganSaya.deposit(1000);
tabunganSaya.deposit(1000);
tabunganSaya.deposit(1000);
tabunganSaya.cekSaldo(); // Output: Saldo sekarang: 1000

function counterDuaArah() {
    let awal = 0
    function naik() {
        awal++
        console.log(awal)
    }
    function turun() {
        awal--
        console.log(awal)
    }
    return {naik, turun}
}

const counter = counterDuaArah();
counter.naik();   // 1
counter.naik();   // 2
counter.turun();  // 1

let produk = {
    nama: "roti",
    harga: 2000,
    stok: 201,
    detail() {
        console.log(`Produk: ${this.nama}, Harga: ${this.harga}, Stock: ${this.stok}`)
    },
    jual(jumlah) {
        console.log(`Berhasil menjual ${jumlah} roti`)
        console.log(`Stock sekarang: ${this.stok - jumlah}`)
    }
}

produk.detail(); 
// Produk: Laptop, Harga: 15000000, Stok: 5

produk.jual(2);
// Berhasil menjual 2 Laptop
// Stok sekarang: 3

let timer = {
    nama: "Alfian",
    start() {
        setTimeout(() => {
            console.log(`Timer milik ${this.nama} berjalan...`)
        }, 2000)
    }
}
console.log(timer.start())