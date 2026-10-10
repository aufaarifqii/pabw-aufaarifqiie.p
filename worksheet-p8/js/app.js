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