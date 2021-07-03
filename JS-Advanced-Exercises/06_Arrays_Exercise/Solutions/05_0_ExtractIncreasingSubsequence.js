function increasingSubsequence(inpArr){
    let resultArr = [];
    resultArr[0] = inpArr[0];
    for (let i = 1; i < inpArr.length; i++) {
        let inpElem = inpArr[i];
        if(inpElem >= resultArr.slice(-1)){
            resultArr.push(inpElem);
        }
    }
    return resultArr;
}

console.log(increasingSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
