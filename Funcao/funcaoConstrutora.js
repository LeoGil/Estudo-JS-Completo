function Carro(velocidadeNaxima = 200, delta = 5) {
    let velocidadeAtual = 0
    this.aceletar = function () {
        if (velocidadeAtual + delta <= velocidadeNaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeNaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro

uno.aceletar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.aceletar()
console.log(ferrari.getVelocidadeAtual())