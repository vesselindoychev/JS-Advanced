function evenPositions(arr) {
    let evenPositionArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 0) {
            evenPositionArr.push(arr[index])
        }
    }
    
    console.log(evenPositionArr.join(' '));
}

evenPositions(['20', '30', '40', '50', '60'])
evenPositions(['5', '10'])