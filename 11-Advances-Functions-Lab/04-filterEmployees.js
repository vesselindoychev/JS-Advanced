// function filterEmployees(data, criteria) {
//     data = JSON.parse(data);
//     let [actualCriteria, searchedCriteria] = criteria.split('-');
//     let counter = 0;
//     for (let obj of data) {
//         let buff = '';
        
//         if (obj[actualCriteria] === searchedCriteria) {
//             buff += `${counter}. ${obj.first_name} ${obj.last_name} - ${obj.email}`
//             console.log(buff);
//             counter += 1
//         }
        
//     }
    
// }


function solve(data, criteria) {
  data = JSON.parse(data);
  let [prop, value] = criteria.split('-')

  data
    .filter(x => x[prop] === value) 
    .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
    .forEach(x => console.log(x))
}


solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)