const addedBtn = document.querySelector(".added-btn");
const cardSection = document.querySelector("section");
const closeBtn = document.querySelector(".close-btn")

function toggleCard(e) {
    cardSection.classList.toggle("hidden");
    console.log(e.target);
    e.stopPropagation();
}

addedBtn.addEventListener('click',toggleCard);

closeBtn.addEventListener('click',toggleCard);

cardSection.addEventListener('click',toggleCard,{capture: true});