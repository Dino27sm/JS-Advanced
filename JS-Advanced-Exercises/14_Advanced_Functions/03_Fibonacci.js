function fiboFunc() {
    let numContainer = [0, 0];

    return () => {
        let fiboNum = numContainer[0] + numContainer[1];
        numContainer = [numContainer[1], numContainer[1] + numContainer[0] || 1];
        return fiboNum || 1;
    }
}
let result = fiboFunc();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
