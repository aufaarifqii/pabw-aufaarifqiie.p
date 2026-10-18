import { fetchNews } from './api.js';

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

const container = document.querySelector('#artikel-list') || document.querySelector('#list');
const statusEl = document.querySelector('#artikel-status');

function render(list) {
  if (!container) return;
  container.textContent = '';
  if (!list || list.length === 0) {
    if (statusEl) statusEl.textContent = 'Tidak ada data untuk ditampilkan.';
    else container.textContent = 'Tidak ada data untuk ditampilkan.';
    return;
  }
  if (statusEl) statusEl.textContent = '';
  list.forEach(function (n) {
    const card = document.createElement('article');
    card.className = 'kartu';
    const heading = document.createElement('h3');
    heading.textContent = n.title;
    card.appendChild(heading);
    container.appendChild(card);
  });
}

window.render = render;

async function muatData() {
  if (statusEl) statusEl.textContent = 'Memuat data...';
  else if (container) container.textContent = 'Memuat data...';
  try {
    const data = await fetchNews();
    render(data);
  } catch (error) {
    if (statusEl) statusEl.textContent = 'Gagal memuat: ' + error.message;
    else if (container) container.textContent = 'Gagal memuat: ' + error.message;
  }
}

muatData();

export { daftarProyek, profil };