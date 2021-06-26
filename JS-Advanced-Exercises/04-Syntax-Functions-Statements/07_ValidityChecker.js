function validityChecker(input1, input2, input3, input4){
    let x1 = Number(input1);
    let y1 = Number(input2);
    let x2 = Number(input3);
    let y2 = Number(input4);

    let x1y1X0Y0 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let x2y2X0Y0 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let x1y1X2Y2 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if(Number.isInteger(x1y1X0Y0)){console.log(`{${x1}, ${y1}} to {0, 0} is valid`)}
    else {console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)}

    if(Number.isInteger(x2y2X0Y0)){console.log(`{${x2}, ${y2}} to {0, 0} is valid`)}
    else {console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)}

    if(Number.isInteger(x1y1X2Y2)){console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)}
    else {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)}
}

validityChecker(2, 1, 1, 1);
