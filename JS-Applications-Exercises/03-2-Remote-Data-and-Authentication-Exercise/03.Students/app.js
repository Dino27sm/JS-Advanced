let baseUrl = 'http://localhost:3030/jsonstore/collections/students/';
let tableElm = document.getElementById('results');
let tableLineElm = document.querySelector('#results tbody');
loadData();

let formElm = document.getElementById('form');
formElm.addEventListener('submit', submitData);

async function submitData(ev){
    ev.preventDefault();
    let form = ev.currentTarget;
    let formData = new FormData(form);

    let newLine = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        facultyNumber: formData.get('facultyNumber'),
        grade: formData.get('grade'),
    };

    let submitResponse = await fetch(baseUrl, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newLine),
    });
    let data = await submitResponse.json();

    let trElm = document.createElement('tr');
    for (const [key, value] of Object.entries(data)) {
        if(key !== '_id'){
            let tdElm = document.createElement('td');
            tdElm.textContent = value;
            trElm.appendChild(tdElm);
        }
    }
    tableLineElm.appendChild(trElm);
}

async function loadData(){
    let response = await fetch(baseUrl);
    let data = await response.json();
    for (const studentLine of Object.values(data)) {
        let trElm = document.createElement('tr');
        for (const [key, value] of Object.entries(studentLine)) {
            if(key !== '_id'){
                let tdElm = document.createElement('td');
                tdElm.textContent = value;
                trElm.appendChild(tdElm);
            }
        }
        tableLineElm.appendChild(trElm);
    }
}
