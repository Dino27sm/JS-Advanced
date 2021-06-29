function addRemoveElement(inpArr){
    let resultArr = [];

    for (let i = 0; i < inpArr.length; i++) {
        if(inpArr[i] == 'add'){
            resultArr.push(i + 1);
        }
        else if(inpArr[i] == 'remove'){
            resultArr.pop();
        }
    }
    resultArr.length > 0 ? resultArr.forEach(x => console.log(x)) : console.log('Empty');
}

addRemoveElement(['add', 
'add', 
'remove', 
'add', 
'add']
);
