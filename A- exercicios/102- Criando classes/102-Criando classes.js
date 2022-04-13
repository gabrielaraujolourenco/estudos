class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  
  falar () {
    console.log(`${this.nome}`)
  }
  
  comer () {

  }

  beber () {

  }
}

const p1 = new Pessoa('Gabriel', 'Araújo');
console.log(p1);
