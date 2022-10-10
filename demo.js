let arr = ['hello', 'again', 'hello']

for (let i of arr) {
    if (i === 'hello') {
        arr.pop(i);
    }
}