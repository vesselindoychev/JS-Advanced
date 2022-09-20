function printEveryNThElement(arr, step) {
    let filteredNumbers = [];
    for (let i = 0; i < arr.length; i += step) {
        filteredNumbers.push(arr[i]);
    }
    // console.log(filteredNumbers);
    return filteredNumbers;
}

printEveryNThElement(
[
    '5', 
    '20', 
    '31', 
    '4', 
    '20'
], 
    2
)

printEveryNThElement(
    ['dsa',
'asd', 
'test', 
'tset'], 
2

)