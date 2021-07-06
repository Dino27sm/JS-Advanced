function toggle() {
    let buttonElm = document.getElementsByClassName('button')[0];
    let textElm = document.getElementById('extra');

    buttonElm.textContent = buttonElm.textContent === 'More' ? 'Less' : 'More';
    textElm.style.display = textElm.style.display === 'block' ? 'none' : 'block';
}