function sortingNumbers(inpArr){
    let resultArr = [];
    inpArr.sort((a, b) => a - b);
    let arrLength = inpArr.length;
    let lengthHalfArr = Math.floor(arrLength / 2);
    for (let i = 0; i < lengthHalfArr; i++) {
        resultArr.push(inpArr[i]);
        resultArr.push(inpArr[arrLength -1 - i]);
    }
    if(arrLength % 2 !== 0){
        resultArr.push(inpArr[lengthHalfArr]);
    }
    return resultArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
