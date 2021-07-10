function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inpuTextElement = document.querySelector('#inputs textarea');
      let inputText = inpuTextElement.value;

      let inputArray = JSON.parse(inputText);
      
      let restaurantObjects = {};
      for (let i = 0; i < inputArray.length; i++) {
         let [rName, wString] = inputArray[i].split(' - ');
         let wData = wString.split(', ');
         let wObjects = wData.map(x => {
            let [wName, wSalary] = x.split(' ');
            return {wName, wSalary: Number(wSalary)};
         });
         if(restaurantObjects[rName]){
            wObjects = wObjects.concat(restaurantObjects[rName].workers);
         }
         let totalPayment = wObjects.map(x => x.wSalary).reduce((acc, s) => acc + s, 0);
         let averagePayment = totalPayment / wData.length;
         wObjects.sort((a, b) => b.wSalary - a.wSalary);
         let bestPayment = wObjects[0].wSalary;

         restaurantObjects[rName] = {
            workers: wObjects,
            averageSalary: averagePayment,
            bestSalary: bestPayment,
         }
      }
      let bestRestaurant = undefined;
      let maxAverageSalary = 0;
      for (const key in restaurantObjects) {
         if(restaurantObjects[key].averageSalary > maxAverageSalary){
            maxAverageSalary = restaurantObjects[key].averageSalary;
            bestRestaurant = {
               rname: key,
               workers: restaurantObjects[key].workers,
               averageSalary: restaurantObjects[key].averageSalary,
               bestSalary: restaurantObjects[key].bestSalary,
            }
         }
      }
      let bestTeamSorted = bestRestaurant.workers;
      // Strings to print out
      let bestRestaurantInfo = `Name: ${bestRestaurant.rname} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let bestWorkersInfo = bestTeamSorted.map(x => `Name: ${x.wName} With Salary: ${x.wSalary}`).join(' ');
      
      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      let bestRestaurantWorkersElm = document.querySelector('#workers p');

      bestRestaurantElement.textContent = bestRestaurantInfo;
      bestRestaurantWorkersElm.textContent = bestWorkersInfo;
   }
}