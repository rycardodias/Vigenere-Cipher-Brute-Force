let message = '6c40035559535f59165d4c444e45125c5b164f4d4606535752565e5e560f06465713465e5a494f06575b545d421b4a4d06455a56155a5a4b474f5f5513524454504d42421e1342531b564b475d5e13535f5c4d5706585c13415e5e05454f545e5746165a4b4706585c13415e5e05505243575641451705544311415b545a5705454f565a47155f5505574e54125b5c5a57561806465713465e5a494f065f574550441b56565443575d5153490903475f561350405e4b034f571e13425e52464b067812575a16554a5706575d4115571b484c4b545c4715545e494a4347571f1542534c500658415f54585f054c5411531359574942460641534141165443034f45124450445e05505353584652574f404706505c5715454f445150585c5419164f4d4648115d4647167e48534f4357135753424a4d4211465b5016484042551d1252475b5e4103475f561352435a5747435512514c164f4d460673405a415f484d03405d5756411a1b524c535d5613565749575a065e5c13415e5e055052434754525a5e0903535f465a591a1b4c4d06765d5712451b424c495512475c5b5e0903525957135b534c055449435e5719164c4c574e11535f591652515006415d4450441b444d42115f5a525e4f09035545574346165d4a51525912475a164f4d460643574056435e0542485512475d531b494a44544052415f544b03495712475d531b4a4f421f'

const key = findKeyValue(message, 9)
key.forEach(keyValue => {
    const newKey = String.fromCharCode(keyValue)
    console.log(newKey)
}
)
console.log(key)
function findKeyValue(text, keySize) {
    // frequencia das letras segundo o wikipedia 
    var wikiTable = [8.167, 1.492, 2.782, 4.253, 12.702, 2.228, 2.015, 6.094, 6.966, 0.153, 0.772, 4.025, 2.406,
        6.749, 7.507, 1.929, 0.095, 5.987, 6.327, 9.056, 2.758, 0.978, 2.360, 0.15, 1.974, 0.074
    ];
    var key = [];
    // 
    for (var keyPosition = 0; keyPosition < keySize; keyPosition++) {
        var subText = [];
        var j = 1;
        //obter as substrings de N em N
        for (var i = 1 + keyPosition * 2; i < text.length; i += keySize * 2) {

            subText.push(text[i - 1]);
            subText.push(text[i]);
            j += 2;
        }
        // console.log(bytestream);
        //NAO sei como mas assim funciona para encher os array bidimensional !!
        var frequencyTable = Array(256).fill(null).map(() => Array(26).fill(0));
        // o problema esta dentro deste for >>>>>>>>>>>>>
        for (var keybyte = 0; keybyte <= 255; keybyte++) {
            // para encher o array com 0
            var frequency = [];
            for (var i = 0; i < 256; i++) {
                frequency.push(0, 0);
            }
            // fazer o XOR de cada byte com cada carater do texto 
            for (var b = 1; b < subText.length; b += 2) {
                var cipher_char = subText[b - 1] + subText[b];
                // converte o hexa em decimal 
                var number = parseInt(cipher_char, 16);
                number = (number ^ keybyte);
                // se for um char estiver entre 32 e 127 e adicionado a tabela
                if (32 <= number && number <= 127)
                    frequency[number - 32]++;
                // console.log(" the number is "+number);
            }
            // lembrar que o subText esta em hexa logo temos de o dividir por 2  para ter o numero total de chars
            // as letras maisuculas estao entre 65 e 90
            //para filtrar as letras maiusculas  
            for (var i = 0; i < 96; i++) {
                frequency[i] = frequency[i] / (subText.length / 2);
                if (65 <= i && i <= 90) {
                    frequencyTable[keybyte][i - 65] = frequency[i];
                    //  console.log(frequencyTable[keybyte][i - 65]);
                }
            }
        }
        var result = [];
        for (var i = 0; i < 256; i++) {
            result.push(0, 0);
        }
        var maxResult = 0;
        var finalKey;
        // aqui fazer a a fazer o calculo com a frequencia do wikipedia da lingua ingelesa
        for (var i = 0; i < 256; i++) {
            for (var j = 0; j < 26; j++) {
                result[i] += (wikiTable[j] / 100) * frequencyTable[i][j];
                //  console.log(result[i]);
            }
            if (result[i] > maxResult) {
                maxResult = result[i];
                finalKey = i;
                //  console.log(result[i]);
            }
        }
        // nao esquecer que isto devolve a key em decimal !!!!!!!
        key.push(finalKey);
    }
    return key;

}