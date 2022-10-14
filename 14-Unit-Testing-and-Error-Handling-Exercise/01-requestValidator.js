function solve(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validUriPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidMessageSpecialSymbols = ['<', '>', '\\', '&', "'", '"']

    

    function validateMessage(text) {
        for (let ch of text) {
            if (invalidMessageSpecialSymbols.includes(ch)) {
                return false
            }
           

        }
    }

    if (!validMethods.includes(obj.method) || !(obj.hasOwnProperty('method'))) {
        throw new Error(`Invalid request header: Invalid Method`)
    }

    if (!validUriPattern.test(obj.uri) || !(obj.hasOwnProperty('uri'))) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (!(obj.hasOwnProperty('version')) || !validVersions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`)
    }

    if (!(obj.hasOwnProperty('message')) || validateMessage(obj.message) === false) {
        throw new Error(`Invalid request header: Invalid Message`)
    }

    return obj

}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
))

console.log(solve({
    method: 'POST',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  
  ))