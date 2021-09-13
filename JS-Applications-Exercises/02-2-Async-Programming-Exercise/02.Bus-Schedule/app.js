function solve() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    let arriveButtonElm =document.getElementById('arrive');
    let departButtonElm = document.getElementById('depart');
    let spanElm = document.querySelector('#info .info');
    let infoObj = {};

    function depart() {
        let urlAppend = '';
        if (spanElm.textContent === 'Not Connected'){urlAppend = 'depot';}
        else {urlAppend = infoObj.next;}

        fetch(baseUrl + urlAppend)
            .then(function(responseValue){
                return responseValue.json();
            })
            .then(function(dataValue){
                infoObj['name'] = dataValue.name;
                infoObj['next'] = dataValue.next;
                spanElm.textContent = `Next stop ${infoObj['name']}`;
                departButtonElm.disabled = true;
                arriveButtonElm.disabled = false;
            })
            .catch(function(errorValue) {
                spanElm.textContent = 'ERROR!';
                departButtonElm.disabled = true;
                arriveButtonElm.disabled = true;
            });
    }

    function arrive() {
        spanElm.textContent = `Arriving at ${infoObj['name']}`;
        departButtonElm.disabled = false;
        arriveButtonElm.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();