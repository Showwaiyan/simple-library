// HTML UI ELEMENT
const addedBtn = document.querySelector(".added-btn");
const cardSection = document.querySelector("section");
const saveBtn = document.querySelector(".save-btn");
const bookShelf = document.querySelector("main");

// Book stored Variable
const books = [];

function toggleCard(e) {
    if (e.target == addedBtn ||
        e.target == cardSection ||
        e.target == saveBtn) {
            cardSection.classList.toggle("hidden");
            e.stopPropagation();
        }

}

function addBook() {
    const book = {
        cover: document.getElementById("img").value,
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        tag: document.getElementById("tag").value,
        status: document.getElementById("status").value
    }
    document.getElementById("img").value = 
    document.getElementById("name").value = 
    document.getElementById("author").value =
    document.getElementById("pages").value = 
    document.getElementById("tag").value = "";
    document.getElementById("status").value = "not-start";

    books.push(book);
    console.log(books);
}

addedBtn.addEventListener('click',toggleCard);

saveBtn.addEventListener('click',addBook);

cardSection.addEventListener('click',toggleCard);