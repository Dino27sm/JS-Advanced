function lastNumbersSum(num1, num2){
    let elementNum = Number(num1);
    let numToSum = Number(num2);

    let resultArr = [1];
    for (let i = 1; i < elementNum; i++) {
        let tempArr = resultArr.slice(- numToSum);
        let sumTempArr = tempArr.reduce((a, b) => (a + b), 0);

        resultArr.push(sumTempArr);
    }
    return resultArr;
}

console.log(lastNumbersSum(6, 3));
