const saudacao = "Opaaa" //Context lexico 1

function exec() {
    const saudacao = 'Aeeee' //Context lexico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 124
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)