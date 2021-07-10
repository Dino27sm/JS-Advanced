function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
 
    function onClick () {
       let inpuTextElement = document.querySelector('#inputs textarea');
       let inputText = inpuTextElement.value;
 
       let inputArray = JSON.parse(inputText);
       
       let restaurantObjects = [];
       for (let i = 0; i < inputArray.length; i++) {
          let [rName, wString] = inputArray[i].split(' - ');
          let wData = wString.split(', ');
          let wObjects = wData.map(x => {
             let [wName, wSalary] = x.split(' ');
             return {wName, wSalary: Number(wSalary)};
          });
          let totalPayment = wObjects.map(x => x.wSalary).reduce((acc, s) => acc + s, 0);
          let averagePayment = totalPayment / wData.length;
 
          let getIndex = - 1;
          for (let k = 0; k < restaurantObjects.length; k++) {
             if(restaurantObjects[k].rName == rName){
                getIndex = k;
                break;
             }
          }
          if (getIndex !== - 1){
             wObjects = restaurantObjects[getIndex].workers.concat(wObjects);
             restaurantObjects.splice(getIndex, 1, {rName, workers: wObjects, averageSalary: averagePayment});
          }
          else{
             restaurantObjects.push({rName, workers: wObjects, averageSalary: averagePayment});
          }
       }
 
       restaurantObjects.sort((a, b) => b.averageSalary - a.averageSalary);
       let bestRestaurantObject = restaurantObjects[0];
       let bestTeamSorted = bestRestaurantObject.workers.sort((a, b) => b.wSalary - a.wSalary);
       let bestRestaurantSalary = bestTeamSorted[0].wSalary;
 
       // Strings to print out
       let bestRestaurantInfo = `Name: ${bestRestaurantObject.rName} Average Salary: ${bestRestaurantObject.averageSalary.toFixed(2)} Best Salary: ${bestRestaurantSalary.toFixed(2)}`;
       let bestWorkersInfo = bestTeamSorted.map(x => `Name: ${x.wName} With Salary: ${x.wSalary}`).join(' ');
       
       let bestRestaurantElement = document.querySelector('#bestRestaurant p');
       let bestRestaurantWorkersElm = document.querySelector('#workers p');
 
       bestRestaurantElement.textContent = bestRestaurantInfo;
       bestRestaurantWorkersElm.textContent = bestWorkersInfo;
    }
 }