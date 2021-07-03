function timeWalk(stepsNum, stepLength, speed){
    let restingSteps = Math.ceil(500 / Number(stepLength));
    let numOfRests = Math.floor(Number(stepsNum) / restingSteps);
    if(Number(stepsNum) % restingSteps == 0){
        numOfRests -= 1;
    }
    let totalDistanceKm = (Number(stepsNum) * Number(stepLength)) / 1000;
    let walkTimeHours = totalDistanceKm / Number(speed);
    let totalTimeSeconds = walkTimeHours * 3600 + numOfRests * 60;

    totalTimeSeconds = Math.round(totalTimeSeconds);
    let printSeconds = totalTimeSeconds % 60;
    let totalMinutes = Math.floor(totalTimeSeconds / 60);
    let printMinutes = totalMinutes % 60;
    let printHour = Math.floor(totalMinutes / 60);
    if(printHour < 10){
        printHour = '0' + printHour;
    }
    if(printMinutes < 10){
        printMinutes = '0' + printMinutes;
    }
    if(printSeconds < 10){
        printSeconds = '0' + printSeconds;
    }

    console.log(`${printHour}:${printMinutes}:${printSeconds}`)
}

timeWalk(2564, 0.70, 5.5);
