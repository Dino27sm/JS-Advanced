function addItem() {
    let textElm = document.getElementById('newItemText');
    let valueElm = document.getElementById('newItemValue');
    let selectElm = document.getElementById('menu');
    let newOptionElm = document.createElement('option');
    newOptionElm.value = valueElm.value;
    newOptionElm.textContent = textElm.value;
    selectElm.appendChild(newOptionElm);
    textElm.value = '';
    valueElm.value = '';
}