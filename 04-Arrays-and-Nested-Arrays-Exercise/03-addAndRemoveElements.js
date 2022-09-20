function addAndRemoveElements(commands) {
    let initialNumber = 0;
    let result = [];

    for (let command of commands) {
        switch (command) {
            case 'add':
                initialNumber ++;
                result.push(initialNumber);
                break;
            case 'remove':
                initialNumber ++;
                result.pop();
                break;
        }
    }

    if (result.length == 0) {
        console.log('Empty')
    } else {
        console.log(result.join('\n'))
    }
}


addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']


)