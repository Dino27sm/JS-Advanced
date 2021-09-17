let baseUrl = 'http://localhost:3030/jsonstore/phonebook/';

let ulPhonebookElm = document.getElementById('phonebook');
let buttonLoadElm = document.getElementById('btnLoad');

let personElm = document.getElementById('person');
let phoneElm = document.getElementById('phone');
let buttonCreate = document.getElementById('btnCreate');

buttonLoadElm.addEventListener('click', loadPhonebook);
ulPhonebookElm.addEventListener('click', deleteLine);
buttonCreate.addEventListener('click', createContact);
    
async function createContact(){
    let newContact = {
        person: personElm.value,
        phone: phoneElm.value,
    };
    personElm.value = '';
    phoneElm.value = '';

    let response = await fetch(baseUrl, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newContact),
    });
    loadPhonebook();
}

async function deleteLine(ev){
    if(ev.target.textContent == 'Delete'){
        let response = await fetch(baseUrl + ev.target.id, { method: 'delete'});
        loadPhonebook();
    }
}

async function loadPhonebook(){
    let response = await fetch(baseUrl);
    let data = await response.json();

    ulPhonebookElm.innerHTML = '';
    for (const bookItem of Object.values(data)) {
        let newLi = document.createElement('li');
        let dellButton = document.createElement('button');
        dellButton.id = bookItem._id;
        dellButton.textContent = 'Delete';
        newLi.textContent = `${bookItem.person}: ${bookItem.phone}`;
        newLi.appendChild(dellButton);
        ulPhonebookElm.appendChild(newLi);
    }
}
