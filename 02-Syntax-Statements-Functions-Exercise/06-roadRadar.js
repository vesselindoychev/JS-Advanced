function roadRadar(speed, area) {
    let speedArea = 0;
    let result = 0;
    let speedStatus = 0;
    let speedDifference = 0;

    switch (area) {
        case 'motorway':
            speedArea = 130;
            break;
        case 'interstate':
            speedArea = 90;
            break;
        case 'city':
            speedArea = 50;
            break;
        case 'residential':
            speedArea = 20;
            break;

    }

    if (speed <= speedArea) {
        result = `Driving ${speed} km/h in a ${speedArea} zone`;
    } else {
        speedDifference = speed - speedArea;
        if (speedDifference <= 20) {
            speedStatus = 'speeding'
            result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedArea} - ${speedStatus}`
        } else if (20 < speedDifference && speedDifference <= 40) {
            speedStatus = 'excessive speeding'
            result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedArea} - ${speedStatus}`
        } else {
            speedStatus = 'reckless driving'
            result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedArea} - ${speedStatus}`
        }
    }
    console.log(result)
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')