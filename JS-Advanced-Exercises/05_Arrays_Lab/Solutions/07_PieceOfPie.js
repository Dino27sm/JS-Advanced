function pieceOfPie(flavors, startFlavor, endFlavor){
    let firstIndex = flavors.indexOf(startFlavor);
    let secondIndex = flavors.indexOf(endFlavor);

    let resultArr = [];
    if(firstIndex > - 1 && secondIndex > - 1){
        resultArr = flavors.slice(firstIndex, secondIndex + 1);
    }
    return resultArr;
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
