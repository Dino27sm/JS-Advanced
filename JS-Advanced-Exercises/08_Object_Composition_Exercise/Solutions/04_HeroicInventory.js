function heroicInventory(inpArray){
    let resultArr = [];

    for (const iterator of inpArray) {
        let[name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items != undefined ? items.split(', ') : [];

        resultArr.push({name, level, items});
    }
    return JSON.stringify(resultArr);
}

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
