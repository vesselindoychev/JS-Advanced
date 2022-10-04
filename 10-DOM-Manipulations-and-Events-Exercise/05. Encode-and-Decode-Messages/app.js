function encodeAndDecodeMessages() {
    let textareas = document.getElementsByTagName('textarea');
    let btns = document.getElementsByTagName('button');
    btns[0].addEventListener('click', encode);
    btns[1].addEventListener('click', decode);


    function encode(event) {
        let encodeText = textareas[0];
        let newMessage = '';
        for (let ch of encodeText.value) {
            let currentChar = ch.charCodeAt() + 1;
            newMessage += String.fromCharCode(currentChar);
            
        }

        let decodeText = textareas[1];
        decodeText.value = newMessage;
        encodeText.value = ''        
    }

    function decode(event) {
        let decodedMessage = '';
        let decodeTextArea = textareas[1];
        

        for (let ch of decodeTextArea.value) {
            let currentChar = ch.charCodeAt() - 1;
            decodedMessage += String.fromCharCode(currentChar);
        }

        decodeTextArea.value = decodedMessage;
    }
    
}