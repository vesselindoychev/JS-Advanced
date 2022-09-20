function sortAnArrayByTwoCriteria(arr) {
    let sortedArr = arr.sort((a, b) => {
        if(a.length !== b.length) {
            return a.length - b.length
        } else {
            return a.localeCompare(b)
        }
    });

    console.log(sortedArr.join('\n'));
}

sortAnArrayByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)


