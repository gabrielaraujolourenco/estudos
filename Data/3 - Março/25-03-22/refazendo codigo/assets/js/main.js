const texto =  document.querySelector('text');
const button = document.querySelector('button');
const tarefa = document.querySelector('tarefa');

function criaLi() {
    const li = document.createElement('li');
    return li;
}
function criarTarefa(textoInput) {
    const li = criaLi();
li.innerText = textoInput;
tarefa.appendChild(li);

}




//button
button.addEventListener('click', function (e) {
if (!texto.value) return;
criarTarefa(texto.value);

})