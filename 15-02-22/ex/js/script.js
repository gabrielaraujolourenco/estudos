const numero = Number(prompt('digite um numero'));
const numeroTitulo = document.getElementById('numero titulo');
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Seu número +2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>A raiz quadrada do seu número é ${Math.sqrt(numero)}. </p>`;
texto.innerHTML += `<p>O seu número é inteiro ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> é NAN ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> Seu número arredondado para cima ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Seu número arredondado para baixo é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Seu número com duas casas decimais ${numero.toFixed(2)}`;

