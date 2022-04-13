function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min ) + min);
}


function esperaAI(msg, tempo) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

    if(typeof msg !== 'string') { 
      reject('Cai no Erro')
      return; 
  }
      resolve(msg.toUpperCase() + '- Passei na promise');
      return;

    }, tempo);
    
  });
}

function baixaPagina() {
  const emCache = false;
  
  if(emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAI('Baixei a página', 3000);
  }
} 

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('Error', e));

/*
const promises = [
  esperaAI('Promise 1', rand(1, 5)),
  esperaAI('Promise 2', rand(1, 5)),
  esperaAI('Promise 3', rand(1, 5)),
  //esperaAI(12345, 500),
];

Promise.race(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(erro){
    console.log(erro);
  });
*/
