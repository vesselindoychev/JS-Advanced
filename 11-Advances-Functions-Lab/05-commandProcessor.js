function solution() {
    let content = '';

    return {
        append: (str) => content += str,
        removeStart: (n) => content = content.substring(n, content.length),
        removeEnd: (n) => content = content.substring(0, content.length - n),
        print: () => console.log(content)


    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log('---')

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
