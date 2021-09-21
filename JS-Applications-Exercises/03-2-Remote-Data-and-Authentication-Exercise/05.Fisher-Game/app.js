const urlCatches = 'http://localhost:3030/data/catches/';
let divCatchesElm = document.getElementById('catches');

let buttonLoadElm = document.getElementById('button-load');
buttonLoadElm.addEventListener('click', loadCatch);

let addButtonElm = document.getElementById('button-add');
addButtonElm.disabled = localStorage.getItem('regToken') == null;
addButtonElm.addEventListener('click', addCatch);

divCatchesElm.addEventListener('click', (ev) => {
    if(ev.target.className == 'update') catchUpdate(ev);
    else if(ev.target.className == 'delete') catchDelete(ev);
});

async function catchUpdate(ev){
    let updateId = ev.target.parentElement.dataset.idCatch;
    let updateCatchDataArray = Array.from(ev.target.parentElement.children);

    let updateCatch = {};
    Object.values(updateCatchDataArray).forEach(x => updateCatch[`${x.className}`] = x.value);
    let updateResponse = await fetch(urlCatches + updateId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('regToken')},
        body: JSON.stringify(updateCatch),
    });
    let updateResult = await updateResponse.json();
}

async function catchDelete(ev){
    let deleteId = ev.target.parentElement.dataset.idCatch;
    let deleteResponse = await fetch(urlCatches + deleteId, {
        method: 'DELETE',
        headers:{ 'X-Authorization': localStorage.getItem('regToken')},
    });
    let deleteResult = await deleteResponse.json();
    loadCatch();
}

async function addCatch(){
    let addFishFormElm = document.getElementById('addForm');
    let addDataArray = Array.from(addFishFormElm.children).filter(x => x.localName == 'input');

    let newCatch = {};
    Object.values(addDataArray).forEach(x => newCatch[`${x.className}`] = x.value);

    let addFishResponse = await fetch(urlCatches, {
        method:'POST',
        headers:{ 'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('regToken') },
        body: JSON.stringify(newCatch),
    });
    let addFishResult = await addFishResponse.json();
    loadCatch();
}

async function loadCatch(){
    divCatchesElm.textContent = '';
    let fishResponse = await fetch(urlCatches);
    let fishData = await fishResponse.json();
        
    Array.from(fishData).forEach(x => {
        let newDivPatternElm = createDivCatchElm();
        let divChildrenArray = Array.from(newDivPatternElm.children);

        for (const [key, value] of Object.entries(x)) {
            for (let item of Object.values(divChildrenArray)) {
                if(item.localName == 'input' && item.className == key){
                    item.value = value;
                }
            }
        }
        newDivPatternElm.dataset.idOwner = x._ownerId;
        newDivPatternElm.dataset.idCatch = x._id;
        newDivPatternElm.querySelector('.update').disabled = (localStorage.getItem('userId') != x._ownerId);
        newDivPatternElm.querySelector('.delete').disabled = (localStorage.getItem('userId') != x._ownerId);
        divCatchesElm.appendChild(newDivPatternElm);
    });
}

function createDivCatchElm(){
    let addFormElm = Array.from(document.querySelector('#addForm').children).slice(1, 13);
    let newDivElm = document.createElement('div');
    newDivElm.classList.add('catch');

    for (let i = 0; i < addFormElm.length; i += 2) {
        newDivElm.appendChild(addFormElm[i].cloneNode(true));
        addFormElm[i + 1].value = '';
        newDivElm.appendChild(addFormElm[i + 1].cloneNode(true));
            
        if(i < addFormElm.length - 1 && i % 2 === 0){
            newDivElm.appendChild(document.createElement('hr'));
        }
    }
    let btnUpdate = document.createElement('button');
    btnUpdate.disabled = true;
    btnUpdate.classList.add('update');
    btnUpdate.textContent = 'Update';
    newDivElm.appendChild(btnUpdate);

    let btnDelete = document.createElement('button');
    btnDelete.disabled = true;
    btnDelete.classList.add('delete');
    btnDelete.textContent = 'Delete';
    newDivElm.appendChild(btnDelete);

    return newDivElm;
}
