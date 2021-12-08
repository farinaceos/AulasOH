

// Área das Variáveis

const anoAtual = 2021; //-> Inteiro - numero inteiro

var anoUsuario = prompt("Quando você nasceu?");


var idade = anoAtual - anoUsuario;

var nome = prompt("Qual o seu nome?"); //-> String - Palavra, Frase, Numeros

var estaAprovada = false; //-> Booleano - True (verdadeiro), False (falso)

var contador = 5; //utiliza para contar rotinas

//let criada para busca no banco de dados xpto
let yJh = [12,12312 ,123123,234234,4234];


//area da programação

//while de validação da idade
while (contador >= 0) {
    if (idade >= 18) {
        alert("Parabéns, " + nome + " você é maior de idade! Agora veja essa mensagem mais " + contador + " vezes")
    } else if (idade < 18) {
        alert("Puxa, você ainda é menor de idade.")
    } else if (isNaN(idade)) {
        alert("Você não digitou um ano válido!")
    }
    contador = contador - 1;
}
console.log("Você nasceu em " + anoUsuario);
console.log("Estamos em " + anoAtual);
console.log("A sua idade é " + idade)

document.write("Você nasceu em " + anoUsuario);
document.write("Estamos em " + anoAtual);
document.write("A sua idade é " + idade);

// area das funções



