function evenPositions(inputArray){
    let outArray = [];
    for (let i = 0; i < inputArray.length; i += 2) {
        outArray.push(inputArray[i]);
    }
    console.log(outArray.join(' '));
}

evenPositions(['5', '10']);
