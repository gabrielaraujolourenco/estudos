function relogio () {
function getTimeFromSecond(second) {
    const data = new Date(second*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'GMT'
    });
}

const relogio = document.querySelector('.relogio');
let second = 0;
let timer;

function iniciaRelogio(){
timer = setInterval(function() {
        second++;
        relogio.innerHTML = getTimeFromSecond(second);
    },1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        second = 0;
      }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
      }



    if (el.classList.contains('iniciar')) {

        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }


});
}
relogio();