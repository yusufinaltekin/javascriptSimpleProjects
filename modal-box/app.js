const image = document.querySelectorAll(".image");
const showImage = document.querySelector(".show-image");
const modalClose = document.querySelector(".fa-close");
const span = document.querySelector(".modal>span");
const modal = document.querySelector(".modal");


span.addEventListener("click", () => {
    modal.classList.remove("show");

})

modalClose.addEventListener("click", () => {

    modal.classList.remove("show");
});

image.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.add("show");
        showImage.src = item.src;
    })

});