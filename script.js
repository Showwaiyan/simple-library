// HTML UI ELEMENT
const addedBtn = document.querySelector(".added-btn");
const cardSection = document.querySelector("section");
const saveBtn = document.querySelector(".save-btn");
const bookShelf = document.querySelector("main");

// Book stored Variable
const myLibrary = [];

// Book add card appear/disappear
function toggleCard(e) {
    if (e.target == addedBtn ||
        e.target == cardSection ||
        e.target == saveBtn) {
            cardSection.classList.toggle("hidden");
            e.stopPropagation();
        }

}

// Book Constructor
function Book(cover,name,author,pages,tag) {
    this.cover = cover;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.tag = tag;
    this.status = "false";
}

// Book add to library or store in array
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

    myLibrary.push(book);

    displayBooks();
}

// Display books to UI
function displayBooks() {
    bookShelf.innerHTML = "";
    myLibrary.forEach(element => {
       bookShelf.innerHTML += `<div>
       <img src="${element.cover}" alt="book-cover">
       <h3>Name: ${element.name}</h3>
       <h4>Author: ${element.author}</h4>
       <h4>Pages: ${element.pages}</h4>
       <h4>Tag: ${element.tag}</h4>
       <aside>
            <label for="status">Finished</label> 
            <input type="checkbox" name="status" id="status">
       </aside>
   </div>`
    });
}

// Event listener
addedBtn.addEventListener('click',toggleCard);

saveBtn.addEventListener('click',addBookToLibrary);

cardSection.addEventListener('click',toggleCard);

