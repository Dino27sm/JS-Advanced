function roadRadar(realSpeed, driveArea){
    let speed = Number(realSpeed);
    let speedLimit = 0;

    if(driveArea == 'motorway'){speedLimit = 130;}
    else if(driveArea == 'interstate'){speedLimit = 90;}
    else if(driveArea == 'city'){speedLimit = 50;}
    else if(driveArea == 'residential'){speedLimit = 20;}

    if(speed > speedLimit){
        let speedOverLimit = speed - speedLimit;
        let printText = `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${speedLimit} - `;
        if(speedOverLimit <= 20){console.log(printText + 'speeding');}
        else if(speedOverLimit <= 40){console.log(printText + 'excessive speeding')}
        else {console.log(printText + 'reckless driving')}
    }
    else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
