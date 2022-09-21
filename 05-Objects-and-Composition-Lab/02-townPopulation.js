function townPopulation(arr) {
    let resultObj = {};
    for (let pair of arr) {
        let [town, population] = pair.split(' <-> ')
        
        if (resultObj[town] === undefined) {
            resultObj[town] = Number(population)
        } else {
            resultObj[town] += Number(population)
        }
        
    }

    for (let pair in resultObj) {
        console.log(`${pair} : ${resultObj[pair]}`);
    }
    
}

townPopulation(
[
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'Sofia <-> 1',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]
)

console.log('-------')

townPopulation(
[
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]
)