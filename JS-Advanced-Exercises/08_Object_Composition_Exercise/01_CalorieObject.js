function calorieObject(inpArray){
    let object = {};
    for (let i = 0; i < inpArray.length; i += 2) {
        object[inpArray[i]] = Number(inpArray[i+1]);
    }
    return object;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
