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
