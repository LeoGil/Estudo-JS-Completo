const pessoa = {
    nome: 'Rebeca',
    idade: 13,
    peso: 49
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    //console.log(`${e[0]}, ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    //console.log(`${chave}, ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    //vai ser listada?
    enumerable: true,

    //Vai aceitar ser modificada?
    writable: false,

    value: '12/04/1998'
})

pessoa.dataNascimento = '13/01/1990'

console.log(Object.keys(pessoa))

//Objetc assign
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)