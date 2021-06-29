function printNthElement(inpArr, nthElement){
    let nthNum = Number(nthElement);
    let resultArr = [];
    for (let i = 0; i < inpArr.length; i += nthNum) {
        resultArr.push(inpArr[i]);
    }
    return resultArr;
}

console.log(printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
).join(', '));
