function solve(input) {
    let result = [];

    for (let el of input) {
        if (el === 'print') {
            console.log(result.join(','));
        } else {
            let [command, value] = el.split(' ');

            if (command === 'add') {
                result.push(value)
            } else {
                result = result.filter(x => x !== value)
            }
        }
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])