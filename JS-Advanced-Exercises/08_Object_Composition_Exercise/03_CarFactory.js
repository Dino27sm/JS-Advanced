function carFactory(inpCar){
    let outCar = {model: inpCar['model']};
    let inpCarPower = Number(inpCar['power']);
    let inpCarColor = inpCar['color'];
    let inpCarWheel = Number(inpCar['wheelsize']);

    if(inpCarPower < 120){
        outCar['engine'] = { power: 90, volume: 1800 };
    }
    else if(inpCarPower >= 120 && inpCarPower < 200){
        outCar['engine'] = { power: 120, volume: 2400 };
    }
    else if(inpCarPower >= 200){
        outCar['engine'] = { power: 200, volume: 3500 };
    }

    if(inpCar['carriage'] == 'hatchback'){
        outCar['carriage'] = { type: 'hatchback', color: inpCarColor };
    }
    else{
        outCar['carriage'] = { type: 'coupe', color: inpCarColor };
    }

    if(inpCarWheel % 2 === 0){inpCarWheel--}

    outCar['wheels'] = [inpCarWheel, inpCarWheel, inpCarWheel, inpCarWheel];

    return outCar;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
