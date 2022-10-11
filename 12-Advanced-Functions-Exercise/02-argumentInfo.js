function solve(...params) {
    let result = {};

    for (let param of params) {
        let type = typeof(param);
        if (!result.hasOwnProperty(type)) {
            result[type] = 1
        } else {
            result[type] = result[type] + 1
        }
        console.log(`${typeof(param)}: ${param}`)
    }
    
    let buff = '';
    for (let key in result) {
        buff += `${key} = ${result[key]}\n`
    }
    console.log(buff);
}


solve('cat', 42, function () { console.log('Hello world!'); })