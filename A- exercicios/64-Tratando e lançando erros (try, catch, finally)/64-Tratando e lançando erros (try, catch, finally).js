/*
try{
// É executado quando não há erros    
} catch (e) {
// É executado quando há erros 
} finally {
//sempre
}
*/

function retornaHora(data) {
    if(!(data instanceof Date)) {
        console.log('Não é');
    }
}

retornaHora(12)