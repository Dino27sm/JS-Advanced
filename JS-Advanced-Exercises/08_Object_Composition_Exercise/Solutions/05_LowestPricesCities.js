function lowestPrice(inpArray){
    let objArray = [];

    for (const iterator of inpArray) {
        let[name, product, price] = iterator.split(' | ');
        price = Number(price);
        let isEqual = false;
        for (let iterator of objArray) {
            if(iterator['name'] === name && iterator['product'] === product){
                iterator['price'] = price;
                isEqual = true;
                break;
            }
        }
        if(!isEqual){objArray.push({name, product, price});}
    }
    while (objArray.length > 0) {
        let minObject = objArray[0];
        for (let i = 1; i < objArray.length; i++) {
            if(objArray[i]['product'] === minObject['product'] && objArray[i]['price'] < minObject['price']){
                minObject = objArray[i];
            }
        }
        console.log(`${minObject.product} -> ${minObject.price} (${minObject.name})`)
        objArray = objArray.filter(x => x['product'] !== minObject['product']);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);
