function listNames(inpArr){
    inpArr.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= inpArr.length; i++) {
        inpArr[i - 1] = `${i}.` + inpArr[i - 1];
    }
    inpArr.forEach(x => console.log(x));
}

listNames(["John", "Bob", "Christina", "Ema"]);
