const profil = {
  nama:     "Aufaa Rifqii Eka Prahastya",
  peran:    "Mahasiswa Informatika Semester 3",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

const kalimat = `Nama saya ${profil.nama}, Saya ${profil.peran}, dan saya belajar ${profil.keahlian.length} keahlian.`;;
let pilihanAktif ="semua";

console.log(profil)
console.log(kalimat)

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" . ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  {judul: "Trash Vision",tahun: 2025,selesai: true},
  {judul: "SIUKT",tahun: 2026, selesai: true},
  {judul: "Kuisin",tahun: 2026,selesai: false}
];

console.table(profil.keahlian);
console.table(daftarProyek);

const judul = daftarProyek.map((proyek) => proyek.judul)
console.table(judul)

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);