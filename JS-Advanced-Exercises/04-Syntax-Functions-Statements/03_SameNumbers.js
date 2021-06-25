function sameNumbers(someNum){
    let firsDigit = someNum % 10;
    let flag = true;
    let intPart = someNum;
    let sumDigits = 0;

    while (intPart / 10 > 0) {
        let remaining = intPart % 10;
        sumDigits += remaining;
        if(remaining != firsDigit){
            flag = false;
        }
        intPart = Math.floor(intPart / 10);
    }
    console.log(flag);
    console.log(sumDigits);
}

sameNumbers(1234);
