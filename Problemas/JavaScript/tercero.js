function descuento(){ 

    let total = document.getElementById('compra').value;
    total = parseFloat(total);

    let des = (total * 0.15);
    
    let montofinal = total - des; 

document.getElementById('compraFinal').innerHTML = `El total de su compra con descuento es de $${montofinal.toFixed(2)}`;
}