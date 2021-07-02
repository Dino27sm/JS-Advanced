function storeCatalogue(inpArray){
    let objArray = [];
    for (const iterator of inpArray) {
        let [productName, productPrice] = iterator.split(' : ');
        productPrice = Number(productPrice);
        objArray.push({productName, productPrice})
    }
    objArray.sort((a, b) => (a.productName).localeCompare(b.productName));
    let letterBuffer;
    for (let i = 0; i < objArray.length; i++) {
        let beginLetter = (objArray[i].productName).slice(0, 1);
        if(letterBuffer != beginLetter){
            letterBuffer = beginLetter;
            console.log(beginLetter);
        }
        console.log(`  ${objArray[i].productName}: ${objArray[i].productPrice}`)
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
