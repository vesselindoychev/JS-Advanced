(function stringExtension() {

    String.prototype.ensureStart = function(str) {
        if (this.startsWith(str)) {
            return `${this}`
        } 
        return str + `${this}`
        
    }

    String.prototype.ensureEnd = function(str) {
        if (this.endsWith(str)) {
            return `${this}`
        }
        return `${this}` + str
        
    }

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    }

    // String.prototype.truncate = function (n) {
    //     if (this.length <= n) {
    //         return this
    //     } 
    //     let res = this.split(' ')
    //     if (res.length > 1) {
    //         res.pop()
    //         return res.join(' ') + '...'
    //     } else {
    //         if (n < 4) {
    //             return '.'.repeat(n)
    //         }
    //         return this.slice(0, n - 3) + '...'
    //     }
    // }
    String.prototype.truncate = function(n) {
        if (this.length <= n) {
            return this.toString();
        }
        if (n < 4) {
            return '.'.repeat(n);
        }
        let words = this.split(' ');
        while ((words.join(' ') + '...').length > n) {
            if (words.length > 1) {
                words.pop();
            } else {
                words[0] = words[0].slice(0, n - 3)
            }
        }
        return words.join(' ').trim() + '...';
    };

    String.format = function (string, ...params) {
        params.forEach((element, index) => 
            string = string.replace(`{${index}}`.toString(), element));
        return string;
    }

    // let str = 'my string';
    // str = str.ensureStart('my');
    // str = str.ensureStart('hello ');
    // str = str.truncate(16);
    // str = str.truncate(14);
    // str = str.truncate(8);
    // str = str.truncate(4);
    // str = str.truncate(2);
    // str = String.format('The {0} {1} fox',
    //   'quick', 'brown');
    // str = String.format('jumps {0} {1}',
    //   'dog');

    // console.log(str)

}
)()

stringExtension()