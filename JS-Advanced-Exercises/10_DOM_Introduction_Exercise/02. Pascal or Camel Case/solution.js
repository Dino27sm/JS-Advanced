function solve() {
  let textElement = document.getElementById('text');
  let conventionElement = document.getElementById('naming-convention');

  let textToConvert = textElement.value;
  let conventionType = conventionElement.value;

  let convertedText;
  if(conventionType == 'Camel Case'){
    convertedText = textToConvert.toLowerCase()
    .split(' ')
    .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
    .join('');
  }
  else if(conventionType == 'Pascal Case'){
    convertedText = textToConvert.toLowerCase()
    .split(' ')
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join('');
  }
  else {convertedText = 'Error!';}

  let resultSpanElement = document.getElementById('result');
  resultSpanElement.textContent = convertedText;
}