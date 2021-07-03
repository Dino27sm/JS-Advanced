function printNthElement(inpArr, nthElement){
    let nthNum = Number(nthElement);
    return inpArr.filter((a, i) => i % nthNum === 0);
}

console.log(printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
).join(', '));
