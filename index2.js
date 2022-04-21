const secret = '' //HEX '3b2523263132333536' // ASCII ;%#&12356
//chave em HEX
let message = '6c40035559535f59165d4c444e45125c5b164f4d4606535752565e5e560f06465713465e5a494f06575b545d421b4a4d06455a56155a5a4b474f5f5513524454504d42421e1342531b564b475d5e13535f5c4d5706585c13415e5e05454f545e5746165a4b4706585c13415e5e05505243575641451705544311415b545a5705454f565a47155f5505574e54125b5c5a57561806465713465e5a494f065f574550441b56565443575d5153490903475f561350405e4b034f571e13425e52464b067812575a16554a5706575d4115571b484c4b545c4715545e494a4347571f1542534c500658415f54585f054c5411531359574942460641534141165443034f45124450445e05505353584652574f404706505c5715454f445150585c5419164f4d4648115d4647167e48534f4357135753424a4d4211465b5016484042551d1252475b5e4103475f561352435a5747435512514c164f4d460673405a415f484d03405d5756411a1b524c535d5613565749575a065e5c13415e5e055052434754525a5e0903535f465a591a1b4c4d06765d5712451b424c495512475c5b5e0903525957135b534c055449435e5719164c4c574e11535f591652515006415d4450441b444d42115f5a525e4f09035545574346165d4a51525912475a164f4d460643574056435e0542485512475d531b494a44544052415f544b03495712475d531b4a4f421f'

let newMessage = ''
for (let i = 0; i < 50 /*message.length*/; i++) {
    if (i % 2 === 0) {
        const par = message[i] + message[i + 1]
        newMessage += par + ' '
    }
}

console.log(newMessage)

let groupLetters = []
//script do duarte
for (let i = 2; i < 14; i++) {
    let encrypted = []

    for (let j = 1; j < message.length; j += i * 2) {
        encrypted.push(message[j - 1] + message[j])
    }
    groupLetters.push(encrypted)
}

console.log(groupLetters)

// console.log(
//     String.fromCharCode(
//         parseInt('3b', 16) ^ parseInt('6c', 16)
//     )
// )




// console.log(newMessage)

// console.log(parseInt(message, 16))
//mensagem tem carateres entre 32 e 127
//chave entre 2 e 13 (cada byte pode estar entre 0 e 255).

// let padding = 0
// let totalByLine = []
// let majorNumber = 0

// function compareRows(padding) {
//     let totalMatches = 0
//     for (let i = 0; i < message.length; i++) {
//         if (message[i] === message[i + padding]) {
//             totalMatches++
//             if(padding === 2) console.log(message[i])
//         }
//     }
//     return totalMatches
// }

// for (let i = 1; i < message.length; i++) {
//     let total = compareRows(i)
//     totalByLine.push({ line: i, total: total })
//     //ver qual é o maior numero de coincidecias
//     if (total > majorNumber) majorNumber = total
// }

// // totalByLine.filter(item => item.total === majorNumber).forEach((item, index) => {
// //     console.log(item)
// // })

// // const maxSpeed = {
// //     car: 300,
// //     bike: 60,
// //     motorbike: 200,
// //     airplane: 1000,
// //     helicopter: 400,
// //     rocket: 8 * 60 * 60
// // };

// // const sortable = Object.fromEntries(
// //     Object.entries(totalByLine).sort(([,a], [, b]) => b.total-a.total)
// // );

// console.log(totalByLine.filter(item => item.total > 200))
// const newObj = totalByLine
//     .sort((a, b) => a.total < b.total ? 1 : -1)
//     .slice(0, 30)
//     .sort((a, b) => a.line > b.line ? 1 : -1);

// // console.log(newObj);

// const distanceArray = []

// for (let i = 0; i < newObj.length - 1; i++) {
//     const difference = newObj[i + 1].line - newObj[i].line
//     if (1 < difference && difference < 14)
//         distanceArray.push(difference);
// }

// console.log(distanceArray)

// // for (const elem of totalByLine) {
// //     if (elem.total > majorNumber) majorNumber = elem.total
// // }
// // console.log(majorNumber)
// // console.log('total: ' + JSON.stringify(totalByLine))

// console.log(6 ^ 15)

const letterScores = {
    ' ': 15, //dec 32 - 20
    'e': 12.702, //dec 101 - hex 65
    't': 9.056, //75
    'a': 8.167, //61
    'o': 7.507, //6f
    'i': 6.966, //69
    'n': 6.749, //6e
    's': 6.327, //73
    'h': 6.094, //68
    'r': 5.987, //72
    'd': 4.253, //64 
    'l': 4.025, //6c
    'c': 2.782, //63
    'u': 2.758, //75
    'm': 2.406, //6d
    'w': 2.360, //77
    'f': 2.228, //66
    'g': 2.015, //67
    'y': 1.974, //79
    'p': 1.929, //70
    'b': 1.492, //62
    'v': 0.978, //76
    'k': 0.772, //6b
    'j': 0.153, //6a
    'x': 0.150, //78
    'q': 0.095, //71
    'z': 0.074 //7a
};

// for (const key in letterScores) {
//     console.log(key.charCodeAt(0).toString(16))
// }
// const hexamost = 'AA'.charCodeAt(0)//.toString(16)
// console.log(String.fromCharCode(hexamost ^ 20).charCodeAt(0).toString(16))

// let xorASCII = String.fromCharCode(77 ^ 33).charCodeAt(0).toString(16)
// console.log(xorASCII, String.fromCharCode(xorASCII))

// function convertToASCIICode(key) {
//     return key.charCodeAt(0)
// }

// function convertASCIICodeToBinary(key) {
//     return key.toString(2)
// }

// function convertToBinary(key) {
//     return key.charCodeAt(0).toString(2)
// }

// let asciiEncoded = ''
// let hexEncoded = ''

// //criar a mensagem encriptada
// for (const key of message) {
//     if (secretCaracterPosition > secret.length - 1) secretCaracterPosition = 0
//     //converter o caracter da chave secreta para código ASCII
//     let secretCaracter = convertToASCIICode(secret[secretCaracterPosition])
//     secretCaracterPosition++
//     //converter caracter para código ASCII
//     let messageCaracter = convertToASCIICode(key)

//     //XOR entre caracter da chave secreta e caracter da mensagem
//     let xorASCII = String.fromCharCode(secretCaracter ^ messageCaracter).charCodeAt(0)

//     //lista de codigos ASCII - apenas para demonstração
//     asciiEncoded += xorASCII + ' '

//     if (xorASCII.toString(16).length < 2) {
//         hexEncoded += '0' + xorASCII.toString(16)
//     } else {
//         hexEncoded += xorASCII.toString(16)
//     }
// }


// let decoderString = ''
// secretCaracterPosition = 0

// for (let i = 0; i < hexEncoded.length; i++) {
//     if (i % 2 === 0) {
//         if (secretCaracterPosition > secret.length - 1) secretCaracterPosition = 0
//         //converter o caracter da chave secreta para código ASCII
//         let secretCaracter = convertToASCIICode(secret[secretCaracterPosition])
//         secretCaracterPosition++

//         //junta os carateres 2 a 2 de forma a dar parse e eliminar os 0
//         let hex = hexEncoded[i] + hexEncoded[i + 1]
//         let decimal = parseInt(hex, 16)

//         //faz o XOR com os 2 numeros que representam os codigos ASCII
//         let xorASCII = String.fromCharCode(secretCaracter ^ decimal).charCodeAt(0)

//         let ascii = String.fromCharCode(xorASCII)

//         decoderString += ascii
//     }
// }

// console.log(decoderString)

