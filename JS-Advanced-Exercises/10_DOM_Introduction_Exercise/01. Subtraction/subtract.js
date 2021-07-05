function subtract() {
    let elm1 = document.getElementById('firstNumber');
    let elm2 = document.getElementById('secondNumber');

    let num1 = Number(elm1.value);
    let num2 = Number(elm2.value);

    let resultNum = num1 - num2;

    let elmResult = document.getElementById('result');
    elmResult.textContent = resultNum;
}
