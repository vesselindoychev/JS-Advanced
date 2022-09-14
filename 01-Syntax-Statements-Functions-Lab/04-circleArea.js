function circleArea(parameter) {
    let result = 0;
    let parameterType = typeof(parameter);
    if (parameterType === 'number') {
        result = (Math.pow(parameter, 2) * Math.PI).toFixed(2)
        console.log(result)
    } else{
        result = `We can not calculate the circle area, because we receive a ${parameterType}.`
        console.log(result)
        
    }
    
}

circleArea(5)
circleArea('name1')