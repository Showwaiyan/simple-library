const addedBtn = document.querySelector(".added-btn");
const cardSection = document.querySelector("section");
const closeBtn = document.querySelector(".close-btn")

function toggleCard(e) {
    if (e.target == addedBtn ||
        e.target == cardSection ||
        e.target == closeBtn) {
            cardSection.classList.toggle("hidden");
            e.stopPropagation();
        }

}

addedBtn.addEventListener('click',toggleCard);

closeBtn.addEventListener('click',toggleCard);

cardSection.addEventListener('click',toggleCard);