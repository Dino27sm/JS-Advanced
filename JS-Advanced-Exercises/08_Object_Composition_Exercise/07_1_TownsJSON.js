function townsJSON(inpArray){
    const re = /\s*\|\s*/;
    let objArray = [];
    let tableCol = inpArray[0].split(re).filter(x => x !== '');
    for (let i = 1; i < inpArray.length; i++) {

        //[tableCol[0], tableCol[1], tableCol[2]] = inpArray[i].split(re).filter(x => x !== '');
        //tableCol[1] = Number(Number(tableCol[1]).toFixed(2));
        //tableCol[2] = Number(Number(tableCol[2]).toFixed(2));
        //objArray.push({tableCol[0], tableCol[1], tableCol[2]});
    }
    
    return tableCol;
}

console.log(townsJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
