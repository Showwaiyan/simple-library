const addedBtn = document.querySelector(".added-btn");
const cardSection = document.querySelector("section");
const saveBtn = document.querySelector(".save-btn")

function toggleCard(e) {
    if (e.target == addedBtn ||
        e.target == cardSection ||
        e.target == saveBtn) {
            cardSection.classList.toggle("hidden");
            e.stopPropagation();
        }

}

addedBtn.addEventListener('click',toggleCard);

saveBtn.addEventListener('click',toggleCard);

cardSection.addEventListener('click',toggleCard);