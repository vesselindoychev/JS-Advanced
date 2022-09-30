function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick () {
      let textarea = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let bestRestaurantWorkers = document.querySelector('#workers p');
      let result = [];
      
      
      for (let el of textarea) {
         
         let [restaurant, employees] = el.split(' - ');
         
         if (!result.find(e => e.restaurant === restaurant)) {
            result.push(
               {
                  restaurant,
                  averageSalary: 0,
                  bestSalary: 0,
                  sumSalary: 0,
                  workerList: []
               }
            )
         }
         
         employees = employees && employees.split(', ')
         let currentRestaurant = result.find(e => e.restaurant === restaurant)

         for (let currentWorker of employees) {
            updateResult(currentRestaurant, currentWorker)
         }
      }
      let bestRestaurantValue = result.sort((a, b) => b.bestSalary - a.bestSalary)[0];
      bestRestaurant.textContent = `Name: ${bestRestaurantValue.restaurant} Average Salary: ${bestRestaurantValue.averageSalary.toFixed(2)} Best Salary: ${bestRestaurantValue.bestSalary.toFixed(2)}`
      
      let sortWorkers = bestRestaurantValue.workerList.sort((a, b) => b.workerSalary - a.workerSalary);
      let buff = '';

      for (let w of sortWorkers) {
         buff += `Name: ${w.workerName} With Salary: ${w.workerSalary} `
      }

      bestRestaurantWorkers.textContent = buff
   }

   function updateResult(restaurantObj, worker) {
      let [workerName, workerSalary] = worker.split(' ');
      workerSalary = Number(workerSalary)
      restaurantObj.workerList.push({
         workerName,
         workerSalary
      })
      if (restaurantObj.bestSalary < workerSalary) {
         restaurantObj.bestSalary = workerSalary
      }

      restaurantObj.sumSalary += workerSalary

      restaurantObj.averageSalary = restaurantObj.sumSalary / restaurantObj.workerList.length

   }
}