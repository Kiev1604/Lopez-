function cantidad(){ 

    let hombres = document.getElementById('h').value;
    hombres = parseFloat(hombres);

    let mujeres = document.getElementById('m').value;
    mujeres = parseFloat(mujeres);

    let total = hombres + mujeres;

    let totalhombres = ( hombres * 100 )/total;

    let totalmujeres = (mujeres *100)/total; 

    document.getElementById('totales').innerHTML = `La cantidad de hombres es del ${totalhombres.toFixed(2)}%<br><br> La cantidad de mujeres es del ${totalmujeres.toFixed(2)}%`;}