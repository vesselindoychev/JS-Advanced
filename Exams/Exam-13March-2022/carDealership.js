class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.addedCars = []
    }
    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({
            model, horsepower, price, mileage
        });
        this.addedCars.push(model);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        if (!this.addedCars.includes(model)) {
            throw new Error(`${model} was not found!`);
        }

        let currentIndex = 0;
        let currentCar = 0;
        for (let i = 0; i < this.availableCars.length; i++) {
            if (this.availableCars[i].model === model) {
                currentIndex = i;
                currentCar = this.availableCars[i];
                break;
            }
        }
        let mileageDifference = currentCar.mileage - desiredMileage;
        if (currentCar.mileage <= desiredMileage) {
            currentCar.price = currentCar.price;
        }
        else if (mileageDifference <= 40000) {
            currentCar.price -= currentCar.price * 0.05;
        } else {
            currentCar.price -= currentCar.price * 0.1;
        }

        this.availableCars.splice(currentIndex, 1)
        this.soldCars.push({
            model,
            horsepower: currentCar.horsepower,
            soldPrice: currentCar.price
        });
        this.totalIncome += currentCar.price;
        return `${model} was sold for ${currentCar.price.toFixed(2)}$`
    }
    currentCar() {
        let output = [];
        output.push('-Available cars:');

        this.availableCars.forEach(car => {
            output.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
        })
        if (this.availableCars.length === 0) {
            return 'There are no available cars'
        }
        return output.join('\n')
    }
    salesReport(criteria) {
        let output = [];
        let criterias = ['horsepower', 'model'];
        if (!criterias.includes(criteria)) {
            throw new Error('Invalid criteria!');
        }

        let sortedCars = 0;
        if (criteria === 'horsepower') {
            sortedCars = this.soldCars.sort((a,b) => (b.horsepower > a.horsepower) ? 1 : ((a.horsepower > b.horsepower) ? -1 : 0))
        } else {
            sortedCars = this.soldCars.sort((a, b) => (a.model > b.model) ? 1 : ((b.model > a.model) ? -1 : 0))
        }

        output.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        output.push(`-${this.soldCars.length} cars sold:`);
        for (let car of sortedCars) {
            output.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        }
        return output.join('\n')
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


