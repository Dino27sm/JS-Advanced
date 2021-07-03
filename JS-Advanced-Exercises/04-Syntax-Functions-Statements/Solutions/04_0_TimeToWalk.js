function timeWalk(stepsNum, stepLength, speed){
    let stepSeconds = (stepLength * 3600) / (speed * 1000);
    let totalTime = 0;
    let restDistance = 0;

    for (let index = 1; index <= stepsNum; index++) {
        totalTime += stepSeconds;
        restDistance += stepLength;
        if(restDistance >= 500 && index < stepsNum){
            totalTime += 60;
            restDistance = 0;
        }
    }
    totalTime = Math.round(totalTime);
    let printSeconds = totalTime % 60;
    let totalMinutes = Math.floor(totalTime / 60);
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

timeWalk(40000, 0.60, 5);
