// HTML UI ELEMENT
const addedBtn = document.querySelector(".added-btn");
const cardSection = document.querySelector("section");
const saveBtn = document.querySelector(".save-btn");
const bookShelf = document.querySelector("main");
const filterElement = document.querySelector("#filter");
const searchBar = document.querySelector('input[type="text"');

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

    displayBooks(myLibrary);
}

// Display books to UI
function displayBooks(bookArray) {
    console.log(bookArray);
    bookShelf.innerHTML = "";
    bookArray.forEach(element => {
       bookShelf.innerHTML += 
    `<div data-index="${myLibrary.length-1}" class="book">
       <img src="${element.cover}" alt="book-cover">
       <h3>Name: ${element.name}</h3>
       <h4>Author: ${element.author}</h4>
       <h4>Pages: ${element.pages}</h4>
       <h4>Tag: ${element.tag}</h4>
       <aside>
            <label>Finished</label> 
            <input type="checkbox" name="status" id="status" ${element.status=="false"?"":"checked"}>
       </aside>
   </div>` 
    });
}

// Event listener
addedBtn.addEventListener('click',toggleCard);

saveBtn.addEventListener('click',addBookToLibrary);

cardSection.addEventListener('click',toggleCard);

bookShelf.addEventListener('click',(e)=>{
    if (e.target.parentElement.parentElement.className == "book" 
        && e.target.id == "status") {
            myLibrary[Number(e.target.parentElement.parentElement.dataset.index)].status = "true";
        }
})

filterElement.addEventListener("click",(e)=>{
    console.log(e.target.value);
    if(e.target.value == "all") displayBooks(myLibrary);
    else if (e.target.value == "not-start") displayBooks(myLibrary.filter(ele=>ele.status=="false"));
    else if (e.target.value == "finished") displayBooks(myLibrary.filter(ele=>ele.status=="true"));
})

searchBar.addEventListener("input",(e)=>{
    displayBooks(myLibrary.filter(book=>book.name.toLowerCase().startsWith(searchBar.value.toLowerCase())));
    filterElement.value = "all";
})