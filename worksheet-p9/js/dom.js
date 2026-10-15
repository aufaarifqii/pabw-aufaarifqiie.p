import { daftarProyek } from "./app.js";
export const container = document.querySelector("#list");
export const filterRow = document.querySelector("#filter");
export const empty = document.querySelector("#empty");

export const form = document.querySelector("form");
export const inputGame = document.querySelector("#Game");
export const inputRank = document.querySelector("#Rank");
export const inputWinrate = document.querySelector("#Winrate");
export const inputTanggal = document.querySelector("#Dicapai-pada");

window.container = container;
window.filterRow = filterRow;
window.empty = empty;
window.form = form;
window.inputGame = inputGame;
window.inputRank = inputRank;
window.inputWinrate = inputWinrate;
window.inputTanggal = inputTanggal;

export function buildCard(project) {
    const card = document.createElement("div");
    card.className = "kartu";

    const figure = document.createElement("figure");

    if (project.gambar) {
        const img = document.createElement("img");
        img.src = project.gambar;
        img.alt = `Screenshot ${project.judul}`;
        img.width = 640;
        img.height = 360;
        img.loading = "lazy";
        figure.append(img);
    }

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = project.judul;
    figure.append(figcaption);

    card.append(figure);
    return card;
}

export function render(list) {
    list.forEach((project) => {
        container.append(buildCard(project));
    });
}

render(daftarProyek);
