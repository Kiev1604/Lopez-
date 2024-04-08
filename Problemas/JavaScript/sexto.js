function calcularedad() {
    let fechaNacimiento = new Date(document.getElementById('nacimiento').value);
    let fechaActual = new Date(document.getElementById('actual').value);

    let dif = fechaActual - fechaNacimiento;

    let edad = Math.floor(dif / (1000 * 60 * 60 * 24 * 365.25));

    document.getElementById('final').innerHTML = `Tiene ${edad} años`;
}