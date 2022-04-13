class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){  
    if(this.ligado) {
      console.log(this.nome +' já ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
   console.log(this.nome +' já desligado');
    return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico{

  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi){
    super(nome);
    this.temWifi = temWifi;
  }
  ligar() {
      console.log('Olha voce alterou o método ligar');
  }
}

const s1 = new Smartphone('iphone','Branco', '13 Pro Max');
console.log(s1);

const t1 = new Tablet ('ipad', true);
console.log(t1.ligado);
