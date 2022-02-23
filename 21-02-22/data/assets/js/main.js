const h1 = document.querySelector(".container h1");
const data = new Date();


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


function getNameMonth (numMonth) {

let numaMonth;
    
switch (numMonth){
    case 0:
        numMonth = 'janeiro';
        return numMonth;
    case 1:
        numMonth = 'fevereiro';
        return numMonth;
    case 2:
        numMonth = 'março';
        return numMonth;
    case 3:
        numMonth = 'abril';
        return numMonth;
    case 4:  
        numMonth = 'maio';
        return numMonth;
    case 5:
        numMonth = 'Junho';
        return numMonth;
    case 6:
        numMonth = 'Julho';
        return numMonth;
    case 7:
        numMonth = 'agosto';
        return numMonth;
    case 8:
        numMonth = 'setembro';
        return numMonth;
    case 9:
        numMonth = 'outubro';
        return numMonth;
    case 10:
        numMonth = 'novembro';
        return numMonth;
    case 11:
        numMonth = 'dezembro';
        return numMonth;
}
    
return numMonth;
    
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numMonth = data.getMonth();

    const nomeDia = getDayWeekText(weekDay);
    const nomeMes = getNameMonth(numMonth);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
    ` de ${data.getFullYear()} ${data.getHours()} : ${data.getMinutes()}`
    
    );
}
h1.innerHTML = criaData(data);