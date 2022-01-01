const generate = document.querySelector(".generate-password");
const result = document.querySelector(".result");
const copy = document.querySelector(".copy");
const length = document.getElementById("length");
const close = document.querySelector(".close");
const warning = document.querySelector(".warning")

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomSymbol = () => {
    let symbols = "!^+%&/?*-_#$£";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunctions = {
    getRandomLower,
    getRandomUpper,
    getRandomNumber,
    getRandomSymbol
}


length.addEventListener("click", () => {
    length.value = "";
})

generate.addEventListener("click", () => {

    let lengths = length.value;

    let generatedPassword = "";
    for (let i = 0; i < lengths; i++) {
        if (lengths >= 4 && lengths <= 20) {
            generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 4)]();
        }
        else {
            warning.style.display = "block";
        }
    }
    result.innerText = generatedPassword;
});

copy.addEventListener("click", () => {

    let password = result.innerText;
    if (!password) {
        return
    }
    copy.style.backgroudColor = "#3b3b98";
    const textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

});

close.addEventListener("click", () => {
    warning.style.display = "none";
});
