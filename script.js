let textArea = document.querySelector("#textArea");
let wordBox = document.querySelector("#wordBox");
let characterBox = document.querySelector("#characterBox");

function count() {
    text = textArea.value.trim();
    characterBox.textContent = text.length;
    wordBox.textContent = text.split(/\s+/).filter((item) => item).length;
}
