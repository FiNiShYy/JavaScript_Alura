const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]


fs.readFile(link, 'utf8', (err, texto) => {
console.log(verificaPalavrasDuplicadas(texto))
})

function verificaPalavrasDuplicadas (texto) {
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1 
    });
    console.log(resultado);
    
}
