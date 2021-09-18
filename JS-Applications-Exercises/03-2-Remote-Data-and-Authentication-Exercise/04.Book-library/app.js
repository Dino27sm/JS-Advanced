let booksUrl = 'http://localhost:3030/jsonstore/collections/books/';
let buttonLoadElm = document.getElementById('loadBooks');
let bookToEditId = '';
let tableLineElm = document.querySelector('table tbody');
tableLineElm.textContent = "";

let h3FormElm = document.querySelector('form h3');
let buttonSubmitEl = document.querySelector('form button');

buttonLoadElm.addEventListener('click', getBooks);

let formElm = document.querySelector('form');
formElm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let pressedButtonName = ev.target.querySelector('button').textContent;
    if(pressedButtonName == 'Submit'){
        submitData(ev, null);
    }else if(pressedButtonName == 'Save'){
        submitData(ev, bookToEditId);
    }
});

tableLineElm.addEventListener('click', (ev) => {
    let pressedItem = ev.target;
    if(pressedItem.textContent == "Edit"){
        bookToEditId = pressedItem.parentElement.parentElement.id;
        updateBook(bookToEditId);
    }else if(pressedItem.textContent == "Delete"){
        deleteBook(pressedItem.parentElement.parentElement.id);
    }
})

function updateBook(id){
    let currentLineElmArr = document.getElementById(id).children;

    let formInputs = formElm.querySelectorAll('input');
    formInputs[0].value = currentLineElmArr[0].textContent;
    formInputs[1].value = currentLineElmArr[1].textContent;

    h3FormElm.textContent = 'Edit FORM';
    buttonSubmitEl.textContent = 'Save';
}

async function deleteBook(id){
    let response = await fetch(booksUrl + id, {
        method: 'DELETE'
    });
    let data = await response.json();
    getBooks();
}

async function submitData(ev, bookPutId){
    ev.preventDefault();
    let restMethod = 'POST';
    let url = booksUrl;
    if (bookPutId !== null){
        restMethod = 'PUT';
        url += bookPutId;
    }
    let inpData = new FormData(formElm);
    let titleName = inpData.get('title');
    let authorName = inpData.get('author');
    let newBook = {};

    if(titleName != '' && authorName != ''){
        newBook.author = authorName;
        newBook.title = titleName;

        let response = await fetch(url, {
            method: restMethod,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook),
        });
        let data = await response.json();
        getBooks();
        h3FormElm.textContent = 'FORM';
        buttonSubmitEl.textContent = 'Submit';
    }
    formElm.reset();
}

async function getBooks(){
    tableLineElm.textContent = "";

    let response = await fetch(booksUrl);
    let books = await response.json();

    let booksGot = Object.entries(books);

    for (let i = 0; i < booksGot.length; i++) {
        let newTrElm = document.createElement('tr');
        newTrElm.id = booksGot[i][0];   // newTrElm.dataset.id = booksGot[i][0];

        let titleTdElm = createElm('td', booksGot[i][1]['title']);
        let authorTdElm = createElm('td', booksGot[i][1]['author']);

        let newTdButtonElm = document.createElement('td');
        let editElm = createElm('button', 'Edit');
        let deleteElm = createElm('button', 'Delete');
        newTdButtonElm.appendChild(editElm);
        newTdButtonElm.appendChild(deleteElm);

        newTrElm.appendChild(titleTdElm);
        newTrElm.appendChild(authorTdElm);
        newTrElm.appendChild(newTdButtonElm);

        tableLineElm.appendChild(newTrElm);
    }
}
function createElm(typeElm, textContent){
    let newElm = document.createElement(typeElm);
    newElm.textContent = textContent;
    return (newElm);
}
