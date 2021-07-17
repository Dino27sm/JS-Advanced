function solve() {
   let textAreaElements = document.querySelectorAll('#exercise textarea');
   let textAreaGenerate = textAreaElements[0];
   let textAreaBuy = textAreaElements[1];

   let buttonElements = document.querySelectorAll('#exercise button')
   let buttonGenerate = buttonElements[0];
   let buttonBuy = buttonElements[1];

   buttonGenerate.addEventListener('click', generateItems);

   function generateItems(){
     let inputItems = JSON.parse(textAreaGenerate.value);
     let tableBodyElm = document.querySelector('.table tbody');
     for (let i = 0; i < inputItems.length; i++) {
       let tr = document.createElement('tr');

       let imgTd = document.createElement('td');
       let imgElm = document.createElement('img');
       imgElm.src = inputItems[i].img;
       imgTd.appendChild(imgElm);

       let nameTd = document.createElement('td');
       let nameElm = document.createElement('p');
       nameElm.textContent = inputItems[i].name;
       nameTd.appendChild(nameElm);

       let priceTd = document.createElement('td');
       let priceElm = document.createElement('p');
       priceElm.textContent = inputItems[i].price;
       priceTd.appendChild(priceElm);
       
       let decorTd = document.createElement('td');
       let decorElm = document.createElement('p');
       decorElm.textContent = inputItems[i].decFactor;
       decorTd.appendChild(decorElm);

       let markTd = document.createElement('td');
       let markElm = document.createElement('input');
       markElm.type = 'checkbox';
       markTd.appendChild(markElm);

       tr.appendChild(imgTd);
       tr.appendChild(nameTd);
       tr.appendChild(priceTd);
       tr.appendChild(decorTd);
       tr.appendChild(markTd);

       tableBodyElm.appendChild(tr);
     }
   }
   buttonBuy.addEventListener('click', calculateAndBuy);

   function calculateAndBuy(){
     let checkedBoxes = Array.from(document.querySelectorAll('.table tbody tr input:checked'));
     let checkedRows = checkedBoxes.map(x => x.parentElement.parentElement);

     let itemNames = [];
     let totalPrice = 0;
     let totalDec = 0;
     for (let i = 0; i < checkedRows.length; i++) {
       let rowParts = checkedRows[i].querySelectorAll('td');
       itemNames.push(rowParts[1].querySelector('p').textContent);
       totalPrice += Number(rowParts[2].querySelector('p').textContent);
       totalDec += Number(rowParts[3].querySelector('p').textContent);
     }
     let resulTextAray = [];
     resulTextAray.push(`Bought furniture: ${itemNames.join(', ')}`);
     resulTextAray.push(`Total price: ${totalPrice.toFixed(2)}`);
     resulTextAray.push(`Average decoration factor: ${totalDec / checkedRows.length}`);

     textAreaBuy.textContent = resulTextAray.join('\n');
   }
}