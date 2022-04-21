const secret = 'MySecret'
let message = ''//'Isto99aquilo!!'
let secretCaracterPosition = 0

var fs = require('fs');
function readFile(file) {
    //file is the location of your file 
    var text = fs.readFileSync(file, 'utf8')
    return text
}
message = readFile('mensagem.txt')

function convertToASCIICode(key) {
    return key.charCodeAt(0)
}

function convertASCIICodeToBinary(key) {
    return key.toString(2)
}

function convertToBinary(key) {
    return key.charCodeAt(0).toString(2)
}

let asciiEncoded = ''
let hexEncoded = ''

//criar a mensagem encriptada
for (const key of message) {
    if (secretCaracterPosition > secret.length - 1) secretCaracterPosition = 0
    //converter o caracter da chave secreta para código ASCII
    let secretCaracter = convertToASCIICode(secret[secretCaracterPosition])
    secretCaracterPosition++
    //converter caracter para código ASCII
    let messageCaracter = convertToASCIICode(key)

    //XOR entre caracter da chave secreta e caracter da mensagem
    let xorASCII = String.fromCharCode(secretCaracter ^ messageCaracter).charCodeAt(0)

    //lista de codigos ASCII - apenas para demonstração
    asciiEncoded += xorASCII + ' '

    if (xorASCII.toString(16).length < 2) {
        hexEncoded += '0' + xorASCII.toString(16)
    } else {
        hexEncoded += xorASCII.toString(16)
    }
}


let decoderString = ''
secretCaracterPosition = 0

for (let i = 0; i < hexEncoded.length; i++) {
    if (i % 2 === 0) {
        if (secretCaracterPosition > secret.length - 1) secretCaracterPosition = 0
        //converter o caracter da chave secreta para código ASCII
        let secretCaracter = convertToASCIICode(secret[secretCaracterPosition])
        secretCaracterPosition++

        //junta os carateres 2 a 2 de forma a dar parse e eliminar os 0
        let hex = hexEncoded[i] + hexEncoded[i + 1]
        let decimal = parseInt(hex, 16)

        //faz o XOR com os 2 numeros que representam os codigos ASCII
        let xorASCII = String.fromCharCode(secretCaracter ^ decimal).charCodeAt(0)

        let ascii = String.fromCharCode(xorASCII)

        decoderString += ascii
    }
}

console.log(decoderString)

