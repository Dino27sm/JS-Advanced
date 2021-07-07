function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchElm = document.getElementById('searchField');
      let toSearchRows = Array.from(document.querySelectorAll('tbody tr'));
      let searchText = searchElm.value;

      toSearchRows.forEach(x => x.className = '');

      let filteredRows = toSearchRows.filter(x => {
         let values = Array.from(x.children);
         if(values.some(y => y.textContent.includes(searchText))){
            x.className = 'select';
         }
      });
      searchElm.value = '';      
   }
}