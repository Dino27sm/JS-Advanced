function attachEvents() {
    const specialSymbols = {
        Sunny: '&#x2600;',
        Partly_sunny: '&#x26C5;',
        Overcast: '&#x2601;',
        Rain: '&#x2614;',
    }
    let baseUrl = 'http://localhost:3030/jsonstore/forecaster/';
    let forecastElm = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let locationElm = document.querySelector('#location');
    let submitElm = document.querySelector('#submit');

    submitElm.addEventListener('click', getWeather);

    function getWeather(){
        let locationName = locationElm.value;
        locationElm.value = '';

        fetch(baseUrl + 'locations')
        .then(responseValue => responseValue.json())
        .then((dataValue) => {
            let location = dataValue.find(x => x.name === locationName);

            fetch(baseUrl + `today/${location.code}`)
            .then(dayResponse => dayResponse.json())
            .then((dayData) => {
                let nameData = dayData.name;
                let forecastObj = dayData.forecast;
                let conditionInfo = forecastObj.condition;
                let tempLow = forecastObj.low;
                let tempHigh = forecastObj.high;

                if(document.querySelector('.forecasts')){
                    document.querySelector('.forecasts').remove();
                }
                let divForecastsElm = document.createElement('div');
                divForecastsElm.classList.add('forecasts');
                
                let spanConditionSymbol = document.createElement('span');
                spanConditionSymbol.classList.add('symbol');
                spanConditionSymbol.innerHTML = `${specialSymbols[`${conditionInfo}`]}`;

                let spanCondition = document.createElement('span');
                spanCondition.classList.add('condition');

                let spanLocation = document.createElement('span');
                spanLocation.classList.add('forecast-data');
                spanLocation.textContent = nameData;

                let spanTemperature = document.createElement('span');
                spanTemperature.classList.add('forecast-data');
                spanTemperature.innerHTML = `${tempLow}` + '&#176;' + `/${tempHigh}` + '&#176;';

                let spanWeather = document.createElement('span');
                spanWeather.classList.add('forecast-data');
                spanWeather.textContent = conditionInfo;

                spanCondition.appendChild(spanLocation);
                spanCondition.appendChild(spanTemperature);
                spanCondition.appendChild(spanWeather);

                divForecastsElm.appendChild(spanConditionSymbol);
                divForecastsElm.appendChild(spanCondition);

                currentDiv.appendChild(divForecastsElm);
                forecastElm.style.display = 'block';
            });

            fetch(baseUrl + `upcoming/${location.code}`)
            .then(predictRespond => predictRespond.json())
            .then((predictData) => {
                if(document.querySelector('.forecasts-info')){
                    document.querySelector('.forecasts-info').remove();
                }
                let divForecastsElm = document.createElement('div');
                divForecastsElm.classList.add('forecasts-info');

                let prdctArr = predictData.forecast;
                for (const item of prdctArr) {
                    divForecastsElm.appendChild(createSpanElm(item));
                }
                upcomingDiv.appendChild(divForecastsElm);
            });
        })
        .catch(errorValue => {
            if(document.querySelector('.forecasts-info')){
                document.querySelector('.forecasts-info').remove();
            }
            if(document.querySelector('.forecasts')){
                document.querySelector('.forecasts').remove();
            }
            let divForecastsElm = document.createElement('div');
            divForecastsElm.classList.add('forecasts');
            let spanErrorElm = document.createElement('span');
            spanErrorElm.textContent = 'Error';

            divForecastsElm.appendChild(spanErrorElm);
            currentDiv.appendChild(divForecastsElm);
            forecastElm.style.display = 'block';
        });
    }

// This Function creates a new span element
    function createSpanElm(argObj){
        let newSpan = document.createElement('span');
        newSpan.classList.add('upcoming');

        let conditionString = argObj.condition;
        if(argObj.condition === 'Partly sunny'){
            conditionString = 'Partly_sunny';
        }
        let newSpanSymbol = document.createElement('span');
        newSpanSymbol.classList.add('symbol');
        newSpanSymbol.innerHTML = `${specialSymbols[conditionString]}`;

        let newSpanTemperature = document.createElement('span');
        newSpanTemperature.classList.add('forecast-data');
        newSpanTemperature.innerHTML = `${argObj.low}` + '&#176;' + `/${argObj.high}` + '&#176;';

        let newSpanConditionName = document.createElement('span');
        newSpanConditionName.classList.add('forecast-data');
        newSpanConditionName.textContent = argObj.condition;

        newSpan.appendChild(newSpanSymbol);
        newSpan.appendChild(newSpanTemperature);
        newSpan.appendChild(newSpanConditionName);

        return newSpan;
    }
}

attachEvents();