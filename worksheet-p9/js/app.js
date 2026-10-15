const profil = {
  nama: "Aufaa Rifqii Eka Prahastya",
  peran: "Mahasiswa Informatika Semester 3",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

const kalimat = `Nama saya ${profil.nama}, Saya ${profil.peran}, dan saya belajar ${profil.keahlian.length} keahlian.`;
let pilihanAktif = "semua";

console.log(profil)
console.log(kalimat)

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" . ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
  { judul: "Game Mobile Legend", category: "moba", tahun: 2026, selesai: true, rank: "Mythic Imortal", winrate: "65%", gambar: "game.webp" },
  { judul: "Game Free Fire", category: "fps", tahun: 2022, selesai: true, rank: "Master", winrate: "40%", gambar: "game2.webp" },
  { judul: "Game Valorant", category: "fps", tahun: 2026, selesai: false, rank: "Silver", winrate: "50%", gambar: "game3.webp" }
];

console.table(profil.keahlian);
console.table(daftarProyek);

const judul = daftarProyek.map((proyek) => proyek.judul);
console.table(judul);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Game Valorant");
console.table(katalog);

export { daftarProyek, profil };