let dobro = function (a) {
    return a * 2
}

dobro = (a) => { return a * 2 }

dobro = a => a * 2 // return esta implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'

console.log(ola())