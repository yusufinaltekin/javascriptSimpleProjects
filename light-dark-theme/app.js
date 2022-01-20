const checkBox = document.getElementById("checkbox");
    
checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
})