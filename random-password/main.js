const create = document.querySelector(".create");
const text = document.querySelector(".text");
const copy = document.querySelector(".copy");

const chars = "0123456789!'^%&/()_*-.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const randomPassword = () => {
    let length = 16;
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * chars.length)
        password += chars.substring(random, random + 1);
    }
    text.innerText = password;
}

create.addEventListener("click", () => {
    randomPassword();
});

copy.addEventListener("click", () => {
    const password = text.innerText;
    if (!password) {
        return
    }
    const textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
});