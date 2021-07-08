function solve() {
  let textAreaElm = document.getElementById('input');
  let textArea = textAreaElm.value;

  let textSentances = textArea.split('.').map(x => x + '.');
  textSentances.pop();

  let paragraphTexts = [];
  while (textSentances.length > 0) {
    let tempString = textSentances.splice(0, 3).join('');
    paragraphTexts.push(`<p>${tempString}</p>`);
  }

  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = paragraphTexts;
}

// Other solution

//function solve() {
//  let textAreaElm = document.getElementById('input');
//  let textArea = textAreaElm.value;
//
//  let textSentances = textArea.split('.').map(x => x + '.');
//  textSentances.pop();
//
//  let paragraphTexts = [];
//  let tempText = [];
//  for (let i = 0; i < textSentances.length; i++) {
//    if(i % 3 === 0 && i !== 0){
//      paragraphTexts.push(tempText.join(''));
//      tempText = [];
//    }
//  tempText.push(textSentances[i]);
//  }
//  paragraphTexts.push(tempText.join(''));
//
//  let outputDiv = document.getElementById('output');
//  outputDiv.innerHTML = paragraphTexts.map(x => `<p>${x}</p>`).join('');
//}
