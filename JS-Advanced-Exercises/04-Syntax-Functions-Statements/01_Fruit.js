function fruitPrice(fruitName, fruitWeight, priceKg){
    let weight = fruitWeight / 1000;
    let totalPrice = weight * priceKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitName}.`);
}

fruitPrice('orange', 2500, 1.80);
fruitPrice('apple', 1563, 2.35);
