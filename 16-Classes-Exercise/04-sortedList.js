class List {
    constructor() {
        this.res = [];
        this.size = this.res.length;
        
    }

    add(element) {
        this.res.push(element);
        this.res.sort((a, b) => a - b)
        this.size = this.res.length;
    }

    remove(index) {
        if (index >= this.res.length || index < 0) {
            throw new Error('Index is not valid')
        }
        this.res.splice(index, 1);
        this.size = this.res.length;
    }

    get(index) {
        if (index >= this.res.length || index < 0) {
            throw new Error('Index is not valid')
        }
        return this.res[index];
    }

    

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(1);
console.log(JSON.stringify(list))
console.log(list.get(3)); 
list.remove(2);
console.log(JSON.stringify(list))
console.log(list.get(1));
console.log(list.size)