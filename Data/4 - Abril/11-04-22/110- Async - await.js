function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min ) + min);
}

function esperaAI
(msg, tempo) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

    if(typeof msg !== 'string') { 
      reject('Cai no Erro')
      return; 
  }
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}

// esperaAI('Fase 1', rand(0, 3))
//   .then(valor => {
//    console.log(valor)
//     return esperaAI('Fase 2', rand());
// })
// .then(fase => {
//   console.log(fase)
//   return esperaAI('fase 3', rand())
// })
// .then(fase => {
//   console.log(fase);
// })
// .catch(e => console.log(e));

async function executa() {
  try {
    const fase1 = await esperaAI('Fase 1', rand());
    console.log(fase1);
   
    const fase2 = await esperaAI('Fase 2', rand());
    console.log(fase2);
   
    const fase3 = await esperaAI('Fase 3', rand());
    console.log(fase3);
   
    console.log('Terminamos na fase:', fase3)
  } catch(e) {
    console.log(e);
  }
}

executa();

// pending -> pendente
// fulfilled -> resolvida
// rejected -> rejeitada