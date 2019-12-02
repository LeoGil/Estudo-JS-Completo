// Usnado notacao literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

//Funcoes contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome,
        this.getPrecoComDesc = () => {
            return preco * (1 - desc)
        }
}

const p1 = new Produto('Caneta', 2998, 0.25)

console.log(p1.getPrecoComDesc())

// Funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 10000, 1)

console.log(f1.getSalario(), f2.getSalario())

//Objet.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
