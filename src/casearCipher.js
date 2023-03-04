function caesarCipher(str, shift) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let shiftedCode = charCode;

        if (charCode >= 65 && charCode <= 90) { // uppercase letters
            shiftedCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
            shiftedCode = ((charCode - 97 + shift) % 26 + 26) % 26 + 97;
        }

        result += String.fromCharCode(shiftedCode);
    }

    return result;
}

module.exports = { caesarCipher };
