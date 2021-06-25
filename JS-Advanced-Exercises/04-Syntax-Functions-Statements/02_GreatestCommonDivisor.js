function greatestCommonDivisor(first, second){
    while (first % second != 0) {
        let remaining = first % second;
        first = second;
        second = remaining;
    }
    return second;
}

//console.log(greatestCommonDivisor(780, 840));
console.log(greatestCommonDivisor(60, 960));
