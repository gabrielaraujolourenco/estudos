function getDayWeekText (weekDay) {
let diaSemanaTexto;

switch (weekDay){

case 0:
    diaSemanaTexto = 'Domingo';
    return diaSemanaTexto;
case 1:
    diaSemanaTexto = 'Segunda';
    return diaSemanaTexto;
case 2:
    diaSemanaTexto = 'Terça';
    return diaSemanaTexto;
case 3:
    diaSemanaTexto = 'Quarta';
    return diaSemanaTexto;
case 4:
    diaSemanaTexto = 'Quinta';
    return diaSemanaTexto;
case 5:
    diaSemanaTexto = 'Sexta';
    return diaSemanaTexto;
case 6:
    diaSemanaTexto = 'Sabado';
    return diaSemanaTexto;
default:
    diaSemanaTexto = '';

}

return diaSemanaTexto;

}


const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDayWeekText(diaSemana);







// if (diaSemana === 0 ){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda';
// }else if (diaSemana === 2){
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3 ){
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4 ) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5){
//     diaSemanaTexto = 'sexta';
// }else if (diaSemana === 6){
//     diaSemanaTexto = 'Sabado';
// }else {
//     diaSemanaTexto = '';
// }

console.log(diaSemana, diaSemanaTexto);
