function calificacion(){ 

    let pri = document.getElementById('primera').value;
    pri = parseFloat(pri);

    let seg = document.getElementById('segundo').value;
    seg = parseFloat(seg);

    let ter = document.getElementById('tercer').value;
    ter = parseFloat(ter);

    let ex = document.getElementById('examen').value;
    ex = parseFloat(ex);

    let tra = document.getElementById('trabajo').value;
    tra = parseFloat(tra);

    let parciales = (pri + seg + ter)/3;

    let finparcial = (parciales * 55)/10;

    let finex = (ex * 30)/10;

    let fintra = (tra * 15)/10;
    
    let cal = (finparcial + finex + fintra)/10 ; 

document.getElementById('calificacionfinal').innerHTML = `Su calificación final es: ${cal.toFixed(2)}`;
}