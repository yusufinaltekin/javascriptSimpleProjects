const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();

})

function checkInput() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (userNameValue == "") {
        errorFunct(userName, "User name connot be blank")
    }

    else {
        if (userNameValue.length < 7) {
            errorFunct(userName, "Username cannot be shorter than 7 characters")
        }
        else if (userNameValue.length > 20) {
            errorFunct(userName, "Username cannot be longer than 20 characters")
        }

        else {
            successFunct(userName)
        }
    }

    if (emailValue == "") {
        errorFunct(email, "Email cannot be blank")
    }
    else if (!isEmail(emailValue)) {
        errorFunct(email, 'Not a valid email');
    }
    else {
        successFunct(email);
    }


    if (passwordValue == "") {
        errorFunct(password, "Password cannot be blank")
    }
    else {
        successFunct(password);
    }


    if (passwordCheckValue == "") {
        errorFunct(passwordCheck, "PasswordCheck cannot be blank")
    }
    else if (passwordValue !== passwordCheckValue) {
        errorFunct(passwordCheck, "Passwords does not match");
    }
    else {
        successFunct(passwordCheck);
    }
}

const errorFunct = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const icon = formControl.querySelector("i");
    icon.classList.remove("fas", "fa-check", "success-icon")
    icon.classList.add("far", "fa-times-circle", "error-icon");
    small.style.display = "block"
    small.classList.add("error");
    small.innerText = message;
    input.classList.add("error-input");
}
successFunct = (input) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const icon = formControl.querySelector("i");
    icon.classList.remove("far", "fa-times-circle", "error-icon")
    icon.classList.add("fas", "fa-check", "success-icon");
    small.style.display = "none"
    input.classList.remove("error-input");
    input.classList.add("success-input");

}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
