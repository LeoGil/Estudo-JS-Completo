const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(`Ola ${this.saudacao}`)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar();

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()