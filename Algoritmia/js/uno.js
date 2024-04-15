function problema1(){
    var p1_input = document.querySelector('#p1-input').value;

    if (!/^[A-Za-z\s]+$/.test(p1_input)) {
        document.querySelector('#p1-output').textContent = 'Error: Solo se permiten letras y espacios.';
        return;
    }

    var p1_array = p1_input.split(' ').reverse();
    var p1_res = '';

    p1_array.forEach(function (palabra, i){
       
        if(i > 0) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;
}
