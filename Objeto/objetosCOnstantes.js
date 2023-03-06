// pessoa -> para o endereco de memoria -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa -> 
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)


