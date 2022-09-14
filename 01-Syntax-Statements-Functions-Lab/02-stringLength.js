function stringLength(...params) {
    let totalSumOfParams = 0;
    let averageLength = 0;
    let counter = 0;

    for (let i = 0; i < params.length; i++) {
        totalSumOfParams += params[i].length
        counter += 1
    }

    averageLength = Math.floor(totalSumOfParams / counter)
    
    console.log(totalSumOfParams)
    console.log(averageLength);

}

stringLength('chocolate', 'waffle', 'bannana')
stringLength('pasta', '5', '22.3')