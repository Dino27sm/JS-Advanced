function townsJSON(inpArray){
    const re = /\s*\|\s*/;
    let objArray = [];
    for (let i = 1; i < inpArray.length; i++) {
        let [Town, Latitude, Longitude] = inpArray[i]
            .split(re)
            .filter(x => x !== '');
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
        objArray.push({Town, Latitude, Longitude});
    }
    return JSON.stringify(objArray);
}

console.log(townsJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
