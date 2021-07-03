function increasingSubsequence(inpArr){
    let resultArr = inpArr.reduce((acm, elm) => 
        {if(elm >= acm.slice(-1)){acm.push(elm);} return acm;}, []);
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
    