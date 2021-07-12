function create(words) {
   const contentElm = document.getElementById('content');
   for (let i = 0; i < words.length; i++) {
      let divElm = document.createElement('div');
      let paragraphElm = document.createElement('p');
      paragraphElm.textContent = words[i];
      paragraphElm.style.display = 'none';
      divElm.appendChild(paragraphElm);
      contentElm.appendChild(divElm);
   }
   contentElm.addEventListener('click', function(e) {
      if(e.target.matches('#content div') || e.target.tagName === 'P'){
         const p = e.target.children[0] || e.target;
         const isVisible = p.style.display === 'block';
         p.style.display = isVisible ? 'none' : 'block';
      }
   });
}
