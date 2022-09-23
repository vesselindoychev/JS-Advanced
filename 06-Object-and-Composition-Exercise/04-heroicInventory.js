function heroicInventory(arr) {
    let result = [];
    let heroData = {};
    
    
    for (let data of arr) {
        let pair = data.split(' / ');
        let [heroName, heroLevel, heroItems] = pair;
        heroItems = heroItems ? heroItems.split(', ') : [];
        heroLevel = Number(heroLevel);
        
        heroData = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }

        result.push(heroData);
        
    }

    console.log(JSON.stringify(result));
}

heroicInventory(
[
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)

console.log('------------')

heroicInventory(
    ['Jake / 1000 / Gauss, HolidayGrenade']
)