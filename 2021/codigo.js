var nome;

function clica() {
    alert("O SEU NOME É " + nome)
};

function input() {
    nome = document.querySelector('input').value
    document.querySelector('input').value = " "
    console.log(nome)
    document.getElementById("info").innerHTML = nome;

    console.log()
};


for (var x = 5; x > 0; x--) {
    document.write("BU <br>")
}