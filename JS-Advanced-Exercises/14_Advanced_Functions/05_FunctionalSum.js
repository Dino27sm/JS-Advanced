function functionalSum(n){
    let temp = 0

    function recursive(x) {
        temp += x
        return recursive
    }
    recursive.toString = () => temp
    return recursive(n)
}
console.log(functionalSum(1));
