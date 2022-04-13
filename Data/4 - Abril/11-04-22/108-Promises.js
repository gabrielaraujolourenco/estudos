function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min ) + min);
}


function esperaAI(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('ERROR'))

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAI('frase 1', rand(1, 3))
.then(resposta => {
  console.log(resposta);
  return esperaAI('Frase 2', rand(1, 3));
})
.then(resposta =>{
  console.log(resposta);
  return esperaAI('Frase 3', rand(1, 3));
})
.then(resposta => {
  console.log(resposta);
  return esperaAI('Frase 4', rand(1, 3));
})
.then(resposta => {
  console.log(resposta);
})
.catch(e => {
  console.log('Erro:', e);
});


/*
esperaAI('frase 1', rand(1, 3), () => {
  esperaAI('frase 2', rand(1, 3), () => {
    esperaAI('frase 3', rand(1, 3), () => {
      esperaAI('frase 4', rand(1, 3));
    });
  });
});
*//*
esperaAI('frase 1', rand(1, 3));
esperaAI('frase 2', rand(1, 3));
esperaAI('frase 3', rand(1, 3));
esperaAI('frase 4', rand(1, 3));
*/