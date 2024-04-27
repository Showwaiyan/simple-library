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

function Book(cover,name,author,pages,tag) {
    this.cover = cover;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.tag = tag;
    this.status = "not-start";
}

function addBookToLibrary() {
    const book = new Book(
                document.getElementById("img").value,
                document.getElementById("name").value,
                document.getElementById("author").value,
                document.getElementById("pages").value,
                document.getElementById("tag").value,
    )
    document.getElementById("img").value = 
    document.getElementById("name").value = 
    document.getElementById("author").value =
    document.getElementById("pages").value = 
    document.getElementById("tag").value = "";

    books.push(book);
}

function displayBooks() {
    books.forEach(element => {
       bookShelf.innerHTML += `<div>
       <img src="img/addbutton.png" alt="book-cover">
       <h3>${element.name}</h3>
       <h4>${element.author}</h4>
       <h4>${element.pages}</h4>
       <h4>${element.tag}</h4>
       <select name="status" id="status">
           <option value="not-start" selected>Not Start</option>
           <option value="start">Start Reading</option>
           <option value="done">Done</option>
       </select>
   </div>`
    });
}

addedBtn.addEventListener('click',toggleCard);

saveBtn.addEventListener('click',addBookToLibrary);

cardSection.addEventListener('click',toggleCard);