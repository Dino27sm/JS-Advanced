function magicMatrice(inpMatrice){
    let matriceLength = inpMatrice.length;
    let magicSum = inpMatrice[0].reduce((a, b) => a + b);

    for (let r = 0; r < matriceLength; r++) {
        let sumRow = inpMatrice[r].reduce((a, b) => a + b);
        if(sumRow !== magicSum){return false;}
    }

    for (let col = 0; col < matriceLength; col++) {
        let sumCol = 0;
        for (let row = 0; row < matriceLength; row++) {
            sumCol += inpMatrice[row][col];
        }
        if(sumCol !== magicSum){return false;}
    }
    return true;
}

console.log(magicMatrice([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
