function negativePositiveNumbers(inputArray){
    let resultArr = [];

    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] < 0){
            resultArr.unshift(inputArray[i]);
        }
        else {
            resultArr.push(inputArray[i]);
        }
    }
    resultArr.forEach(item => console.log(item));
}

negativePositiveNumbers([3, -2, 0, -1]);
