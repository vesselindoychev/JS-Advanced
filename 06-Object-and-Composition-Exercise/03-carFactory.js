function carFactory(carObj) {
    let result = {};
    result.model = carObj.model;
    
    // if (carObj.power <= 90) {
    //     result.engine = {
    //         power: 90,
    //         volume: 1800
    //     }
    // } else if (carObj.power <= 120) {
    //     result.engine = {
    //         power: 120,
    //         volume: 2400
    //     }
    // } else {
    //     result.engine = {
    //         power: 200,
    //         volume: 3500
    //     }
    // }

    let engineEnum = {
        'Small engine': {power: 90, volume: 1800},
        'Normal engine': {power: 120, volume: 2400},
        'Monster engine': {power: 200, volume: 3500}
    }

    

    if (carObj.power <= 90) {
        result.engine = engineEnum['Small engine']
    } else if (carObj.power <= 120) {
        result.engine = engineEnum['Normal engine']
    } else {
        result.engine = engineEnum['Monster engine']
    }


    if (carObj.carriage === 'hatchback') {
        result.carriage = {
            type: 'hatchback',
            color: carObj.color
        }
    } else {
        result.carriage = {
            type: 'coupe',
            color: carObj.color
        }
    }

    result.wheels = [0, 0, 0, 0];

    if (carObj.wheelsize % 2 !== 0) {
        

        result.wheels.fill(carObj.wheelsize);
    } else {
        
        result.wheels.fill(carObj.wheelsize - 1);
    }

    return result;
}


carFactory(
    { model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }

)