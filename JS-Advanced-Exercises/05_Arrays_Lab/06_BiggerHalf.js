function biggerHalf(inputArr){
    inputArr.sort((a, b) => a - b, 0);
    let halfLength = Math.ceil(inputArr.length / 2);
    let upperHalfArr = inputArr.slice(-halfLength);

    return upperHalfArr;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
