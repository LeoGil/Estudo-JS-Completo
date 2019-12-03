const pessoa = { nome: 'Joao' }

pessoa.nome = 'Pedro'


// pessoa = { nome: 'Ana' }
pessoa.idade = 23

Object.freeze(pessoa)

delete pessoa

console.log(pessoa)

const pessoaFreeze = Object.freeze({ nome: 'Leonardo' })