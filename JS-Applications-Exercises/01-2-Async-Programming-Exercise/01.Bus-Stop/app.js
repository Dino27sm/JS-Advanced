function getInfo() {
    let stopElm = document.getElementById('stopId');
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';
    let url = baseUrl + stopElm.value;
    
    let stopNameElm = document.getElementById('stopName');
    let ulBusesElm = document.getElementById('buses');
    Array.from(ulBusesElm.querySelectorAll('li')).forEach(x => x.remove());
    //ulBusesElm.textContent = '';

    let fetchPromis = fetch(url);
    fetchPromis
        .then(function(responseValue) {
            return responseValue.json();
        })
        .then(function(dataValue) {
            stopElm.value = '';
            stopNameElm.textContent = dataValue.name;

            for (const [busNum, time] of Object.entries(dataValue.buses)) {
                let liElm = document.createElement('li')
                liElm.textContent = `Bus ${busNum} arrives in ${time}`;
                ulBusesElm.appendChild(liElm);
            }
        })
        .catch(function(error) {
            stopNameElm.textContent = 'Error';
        });
}