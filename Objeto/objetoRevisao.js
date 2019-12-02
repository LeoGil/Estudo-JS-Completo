const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 20,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19,
        },
        {
            nome: 'Ana',
            idade: 28,
        }
    ],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'

console.log(carro)