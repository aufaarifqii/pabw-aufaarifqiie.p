import { daftarProyek } from "./app.js";

export const container = document.querySelector("#list");
export const filterRow = document.querySelector("#filter");
export const empty = document.querySelector("#empty");

export const form = document.querySelector("form");
export const inputGame = document.querySelector("#Game");
export const inputRank = document.querySelector("#Rank");
export const inputWinrate = document.querySelector("#Winrate");
export const inputTanggal = document.querySelector("#Dicapai-pada");
const submitButton = form.querySelector("button[type='submit']");

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
    container.textContent = "";

    if (list.length === 0) {
        empty.hidden = false;
        return;
    }
    empty.hidden = true;

    list.forEach((project) => {
        container.append(buildCard(project));
    });
}

export function markActiveButton(activeButton) {
    document.querySelectorAll("#filter button").forEach((button) => {
        button.classList.toggle("active", button === activeButton);
    });
}

filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    markActiveButton(button);

    const category = button.dataset.category;
    const selected = daftarProyek.filter(
        (project) => category === "all" || project.category === category
    );

    render(selected);
});

render(daftarProyek);

function isFieldValid(field) {
    if (field === inputWinrate) {
        const val = field.value.trim();
        const num = Number(val);
        return val !== "" && !isNaN(num) && num >= 0 && num <= 100;
    }
    return field.value.trim() !== "";
}

function updateFieldState(field) {
    const valid = isFieldValid(field);
    field.setAttribute("aria-invalid", String(!valid));
    return valid;
}

function checkAllFields() {
    const gameValid = isFieldValid(inputGame);
    const rankValid = isFieldValid(inputRank);
    const winrateValid = isFieldValid(inputWinrate);
    const tanggalValid = isFieldValid(inputTanggal);
    const formValid = gameValid && rankValid && winrateValid && tanggalValid;
    submitButton.disabled = !formValid;
    return formValid;
}

[inputGame, inputRank, inputWinrate, inputTanggal].forEach((input) => {
    input.addEventListener("input", () => {
        updateFieldState(input);
        checkAllFields();
    });
});

checkAllFields();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const gameValid = updateFieldState(inputGame);
    const rankValid = updateFieldState(inputRank);
    const winrateValid = updateFieldState(inputWinrate);
    const tanggalValid = updateFieldState(inputTanggal);

    if (!gameValid) {
        inputGame.focus();
        return;
    }
    if (!rankValid) {
        inputRank.focus();
        return;
    }
    if (!winrateValid) {
        inputWinrate.focus();
        return;
    }
    if (!tanggalValid) {
        inputTanggal.focus();
        return;
    }

    form.reset();
    [inputGame, inputRank, inputWinrate, inputTanggal].forEach((input) => {
        input.removeAttribute("aria-invalid");
    });
    checkAllFields();
});

