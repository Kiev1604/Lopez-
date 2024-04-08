function calcular(){ 

    let salarioinicial = document.getElementById('salario').value;
    salarioinicial = parseFloat(salarioinicial);

    let porcentaje = (salarioinicial * 0.02);
    
    let cantidadFinal = salarioinicial + porcentaje; 

document.getElementById('resultado').innerHTML = `Su salario es $ ${cantidadFinal.toFixed(2)}`;
}