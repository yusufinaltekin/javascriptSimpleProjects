const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const auto = true;
const intervalTime = 5000;
let slideInterval;

const prevSlide = () => {

    const active = document.querySelector(".active");
    active.classList.remove("active");
    
    if (active.previousElementSibling) {
        active.previousElementSibling.classList.add("active");
    }
    else {
        slide[slide.length - 1].classList.add("active");
    }

}
const nextSlide = () => {

    const active = document.querySelector(".active");
    active.classList.remove("active");

    if (active.nextElementSibling) {
        if (active.nextElementSibling.className == "slide") {
            active.nextElementSibling.classList.add("active");
        } else {
            slide[0].classList.add("active");
        }
    }

}


prev.addEventListener("click", () => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
next.addEventListener("click", () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
