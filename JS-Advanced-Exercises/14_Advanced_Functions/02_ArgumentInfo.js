function argInfo(...inpData) {
    let dataDict = {};
    let result = inpData.map(x => {
        dataDict[typeof x] = (dataDict[typeof x] || 0) + 1;
        return `${typeof x}: ${x}`;
    });

    result.forEach(x => console.log(x));
    Object.entries(dataDict).sort((x,y) => y[1] - x[1]).map(([type, counts]) =>
        console.log(`${type} = ${counts}`)
    );
}

argInfo('cat', 42, function () { console.log('Hello world!'); });
