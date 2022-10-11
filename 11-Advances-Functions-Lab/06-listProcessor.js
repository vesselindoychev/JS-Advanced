// function solve(input) {
//     let result = [];

//     for (let el of input) {
//         if (el === 'print') {
//             console.log(result.join(','));
//         } else {
//             let [command, value] = el.split(' ');

//             if (command === 'add') {
//                 result.push(value)
//             } else {
//                 result = result.filter(x => x !== value)
//             }
//         }
//     }
// }


function solve(input) {
    let processor = (function () {
        let innerCollection = [];
        return {
            add: (item) => innerCollection.push(item),
            remove: (item) => innerCollection = innerCollection.filter(x => x !== item),
            print: () => console.log(innerCollection.join(",")),
        }
    })();

    for (let data of input) {
        let [command, text] = data.split(" ");
        processor[command](text);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])