function rotateArray(inpArr, inpNum){
    let num = Number(inpNum);
    let rotateNum = num % inpArr.length;
    let startPoint = inpArr.length - rotateNum;

    let rightPart = inpArr.splice(startPoint, rotateNum);
    let resultArr = rightPart.concat(inpArr);

    console.log(resultArr.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);
