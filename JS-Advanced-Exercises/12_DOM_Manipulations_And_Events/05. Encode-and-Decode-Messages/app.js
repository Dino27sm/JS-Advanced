function encodeAndDecodeMessages() {
    let mainElement = document.getElementById('main');
    let textBoxElements = document.querySelectorAll('#main div textarea');
    
    mainElement.addEventListener('click', function(e){
        let buttonText = e.target.textContent;
        let resulText = '';
        if (buttonText === 'Encode and send it'){
            let textToEncode = textBoxElements[0].value;
            let tempArray = [];
            for (let i = 0; i < textToEncode.length; i++) {
                tempArray.push(String.fromCharCode(textToEncode.charCodeAt(i) + 1));
            }
            resulText = tempArray.join('');
            textBoxElements[0].value = '';
            textBoxElements[1].value = resulText;
        }
        if (buttonText === 'Decode and read it'){
            let textToDecode = textBoxElements[1].value;
            let tempArray = [];
            for (let i = 0; i < textToDecode.length; i++) {
                tempArray.push(String.fromCharCode(textToDecode.charCodeAt(i) - 1));
            }
            resulText = tempArray.join('');
            textBoxElements[1].value = '';
            textBoxElements[1].value = resulText;
        }
    });
}