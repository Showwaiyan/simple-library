const addedBtn = document.querySelector(".added-btn");
const cardSection = document.querySelector("section");
const closeBtn = document.querySelector(".close-btn")

addedBtn.addEventListener('click',(e)=>{
    cardSection.classList.remove("hidden");
})

closeBtn.addEventListener("click",(e)=>{
    cardSection.classList.add("hidden");
})