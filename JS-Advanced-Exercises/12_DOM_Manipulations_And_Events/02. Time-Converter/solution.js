function attachEventsListeners() {
    let daysElm = document.getElementById('days');
    let hoursElm = document.getElementById('hours');
    let minutesElm = document.getElementById('minutes');
    let secondsElm = document.getElementById('seconds');

    let daysButton = document.getElementById('daysBtn');
    daysButton.addEventListener('click', function(){
        let daysValue = Number(daysElm.value);
        hoursElm.value = daysValue * 24;
        minutesElm.value = daysValue * 24 * 60;
        secondsElm.value = daysValue * 24 * 60 * 60;
    });

    let hoursButton = document.getElementById('hoursBtn');
    hoursButton.addEventListener('click', function(){
        let hoursValue = Number(hoursElm.value);
        daysElm.value = hoursValue / 24;
        minutesElm.value = hoursValue * 60;
        secondsElm.value = hoursValue * 60 * 60;
    });

    let minutesButton = document.getElementById('minutesBtn');
    minutesButton.addEventListener('click', function(){
        let minutesValue = Number(minutesElm.value);
        daysElm.value = minutesValue / 60 / 24;
        hoursElm.value = minutesValue / 60;
        secondsElm.value = minutesValue * 60;
    });

    let secondsButton = document.getElementById('secondsBtn');
    secondsButton.addEventListener('click', function(){
        let secondsValue = Number(secondsElm.value);
        hoursElm.value = secondsValue / 60 / 60;
        minutesElm.value = secondsValue / 60;
        daysElm.value = secondsValue / 60 / 60 / 24;
    });
}