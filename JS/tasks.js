const variavelString = "Kauã";
const variavelNumber = 20;
const variavelBoolean = true;

console.log(
            "TIPO VARIAVEL KAUÃ:", typeof variavelString,
            "\nTIPO VARIAVEL 20:", typeof variavelNumber,
            "\nTIPO VARIAVEL TRUE:", typeof variavelBoolean
)

//======================================================================//

const primeiroNome = "Kauã";
const ultimoNome = "Miguel";

const primeiroEultimoNome = primeiroNome + " " + ultimoNome;
const primeiroEultimoNomeTemplate = `${primeiroNome} ${ultimoNome}`;

console.log(
            "\nPrimeiro nome:", primeiroNome,
            "\nUltimo nome:", ultimoNome,
            "\nPrimeiro e ultimo nome:", primeiroEultimoNome,
            "\nPrimeiro e ultimo nome com template:", primeiroEultimoNomeTemplate      
)

//======================================================================//

const numero = 20;
const string = "Kauã";

const combinação = `Meu nome é ${string} e tenho ${numero} anos!`;

console.log(
    "\nIdade:", numero,
    "\nNome:", string,
    "\nResultado:", combinação
)
