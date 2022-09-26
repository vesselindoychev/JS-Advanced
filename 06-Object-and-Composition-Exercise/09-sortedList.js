function createSortedList() {
    let arr = [];

    return {
         size: 0,

        add(number) {
            arr.push(number);
            arr.sort((a, b) => a - b);
            this.size++;
            
        },

        remove(index) {
           
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                this.size--;
            }  
        },

        get(index) {
            if (index >= 0 && index < arr.length) {
                return arr[index];
            }
        },
        
        
        
    }
}

let list = createSortedList();
console.log(list.add(5));
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);