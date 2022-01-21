const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result>span");
const numberResult = document.querySelector(".number-result");
const weight = document.querySelector(".weight-input")
const height = document.querySelector(".height-input")


calculate.addEventListener("click", (e) => {

    e.preventDefault();
    let weightValue = weight.value;
    let heightValue = height.value;
    let BMI = weightValue / ((heightValue / 100) * (heightValue / 100))
    BMI = BMI.toFixed(1)
    numberResult.innerHTML = BMI;
    if (BMI < 18.5) {
        result.innerHTML = "Underweight";
        result.style.color = "#BC2020";
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        result.innerHTML = "Normal";
        result.style.color = "#008137";
    }
    else if (BMI > 25 && BMI < 30) {
        result.innerHTML = "Overweight";
        result.style.color = "#FFE400";
    }
    else if (BMI >= 30 && BMI < 39) {
        result.innerHTML = "Obesity";
        result.style.color = "#BC2020";
    }
    else if (BMI >= 40) {
        result.innerHTML = "Morbid Obesity";
        result.style.color = "#8A0101";
    }
})