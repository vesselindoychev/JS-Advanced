function extensibleObject() { 
    return {
        extend(template) {
            for (let key in template) {
                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = template[key]
                } else {
                    this[key] = template[key]
                }
            }
        }
    }
} 

const myObj = extensibleObject();
const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
}

console.log(myObj.extend(template));

