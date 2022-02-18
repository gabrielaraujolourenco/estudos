const pessoa1 ={
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 22,

    fala () {
        console.log(`${this.nome}  ${this.sobrenome} esta falando oi`);
        console.log(`Minha idade atual é ${this.idade}`)
        
    },

    incrementaIdade (){
        this.idade++;    
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
