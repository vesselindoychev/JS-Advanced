function cityRecords(cityName, population, treasury) {
    const city = {};
    city.name = cityName;
    city.population = population;
    city.treasury = treasury;
    
    return city;
}

cityRecords('Tortuga',
7000,
15000
)