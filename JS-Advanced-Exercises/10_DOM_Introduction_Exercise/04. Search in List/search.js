function search() {
   let textToSearch = document.getElementById('searchText').value;
   let serchedArray = Array.from(document.querySelectorAll('#towns li'));

   serchedArray.forEach(x => {
      x.style.fontWeight = 'normal';
      x.style.textDecoration = 'none';

   });

   let filteredElm = serchedArray.filter(x => x.textContent.includes(textToSearch));
   let hilightFilteredElm = filteredElm.forEach(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';
   });

   let resultText = document.getElementById('result');
   resultText.textContent = `${filteredElm.length} matches found`;
}
