function getInfo() {
    let stopElm = document.getElementById('stopId');
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';
    let url = baseUrl + stopElm.value;
    
    let stopNameElm = document.getElementById('stopName');
    let ulBusesElm = document.getElementById('buses');

    ulBusesElm.remove();
    let newUlElm = document.createElement('ul')
    newUlElm.id = 'buses';
    let resultElm = document.getElementById('result');
    resultElm.appendChild(newUlElm);

    let getPromis = fetch(url);
    getPromis
        .then(function(responseValue) {
            return responseValue.json();
        })
        .then(function(dataValue) {
            stopElm.value = '';
            stopNameElm.textContent = dataValue.name;
            for (const busNum in dataValue.buses) {
                let liLine = `Bus ${busNum} arrives in ${dataValue.buses[busNum]}`;
                let liElm = document.createElement('li')
                liElm.textContent = liLine;
                newUlElm.appendChild(liElm);
            }
        })
        .catch(function(error) {
            stopNameElm.textContent = 'Error';
        });
}