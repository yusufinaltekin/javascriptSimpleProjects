const hexButton = document.querySelector(".hexCodeButton");
const hexText = document.querySelector(".hexCode");

hexButton.addEventListener("click", () => {
    let randomHex = "#";
    let hex = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        randomHex += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = randomHex
    hexText.innerHTML = randomHex

})