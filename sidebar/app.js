const side=document.querySelector(".sidebar");
const nav=document.querySelector(".nav");
const closeSide=document.querySelector(".close");

side.addEventListener("click",()=>{

    side.classList.add("active");

});

closeSide.addEventListener("click",()=>{
    side.classList.remove("active");
})