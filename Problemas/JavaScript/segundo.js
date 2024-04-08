function comisiones(){ 

    let salarioi = document.getElementById('salario').value;
    salarioi = parseFloat(salarioi);

    let comision = (salarioi * 0.1);
    
    let comisionfinal = comision * 3; 

    let salariof = salarioi + comisionfinal;

    document.getElementById('resultado').innerHTML = `Su comisión total es de $${comisionfinal.toFixed(2)}` + '<br>' + '<br>' + `Su salario más comisiones es de $${salariof.toFixed(2)}`;
}