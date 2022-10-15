window.onload = init;
var procuctosRegistro;

function init(){
    procuctosRegistro = new Array();

    var vista = document.getElementById('vista');
    var comentarios = document.getElementById('txtComenatarios');

    vista.style.display = 'none'
    comentarios.style.display = 'none';

    vista.onclick = edit;

    document.onkeydown = function(e) {
        e = e || event;

        if (e.keyCode == 27) {
            cancel();
            return false;
        }
        if ((e.ctrlKey && e.keyCode == 'E' .charCodeAt(0)) && !comentarios.offsetHeight) {
            edit();
            return false;
        }
        if ((e.ctrlKey && e.keyCode == 'S' .charCodeAt(0)) && comentarios.offsetHeight) {
            save();
            return false;
        }
    }

    function edit() {
        vista.style.display = 'none'
        comentarios.value = vista.innerHTML;
        comentarios.style.display = 'block';
        comentarios.focus();
    }

    var comentario = new Array();
    function save() {
        comentarios.style.display = 'none';
        vista.innerHTML = txtComenatarios.value;
        vista.style.display = 'block';
        vista.style.letterSpacing = '1.2px';

        registroComen = new Object();
        registroComen = document.getElementById('txtComenatarios').value;
        comentario.push(registroComen)
        console.log(comentario);
        localStorage.setItem('Comentarios',JSON.stringify(comentario));
    }

    function cancel(){
        comentarios.style.display = 'none';
        vista.style.display = 'block';
    }
}

function preciosPodcuto(){//calcula los precios de los procuctos
    var precio = 0.0;
    var precioRegistro = document.getElementById('registroDePrecio');

    var procuctoSe = new Object();
    if(document.getElementById('combosSuper').checked){
        precio += 7.25;
        procuctoSe.comboSuper = document.getElementById('combosSuper').value;
    }
    if(document.getElementById('combosPersonal').checked){
        precio += 5.75;
        procuctoSe.comoPersonal = document.getElementById('combosPersonal').value;
    }
    if(document.getElementById('combosInfantil').checked){
        precio += 3.50;
        procuctoSe.combosInfantil = document.getElementById('combosInfantil').value;
    }
    if(document.getElementById('Ensalada').checked){
        precio += 1.50;
        procuctoSe.Ensalada = document.getElementById('Ensalada').value;
    }
    if(document.getElementById('PapasFritas').checked){
        precio += 1.25;
        procuctoSe.PapasFritas = document.getElementById('PapasFritas').value;
    }
    if(document.getElementById('PiezaGrande').checked){
        precio += 1.75;
        procuctoSe.PiezaGrande = document.getElementById('PiezaGrande').value;
    }
    if(document.getElementById('PiezaPequenia').checked){
        precio += 1.50;
        procuctoSe.PiezaPequenia = document.getElementById('PiezaPequenia').value;
    }
    if(document.getElementById('BebidaGrande').checked){
        precio += 1.50;
        procuctoSe.BebidaGrande = document.getElementById('BebidaGrande').value;
    }
    if(document.getElementById('BebidaMediana').checked){
        precio += 1.25;
        procuctoSe.BebidaMediana = document.getElementById('BebidaMediana').value;
    }
    if(document.getElementById('BebidaPequenia').checked){
        precio += 1.00;
        procuctoSe.BebidaPequenia = document.getElementById('BebidaPequenia').value;
    }
    if(document.getElementById('Cafe').checked){
        precio += 0.50;
        procuctoSe.Cafe = document.getElementById('Cafe').value;
    }
    if(document.getElementById('Postre').checked){
        precio += 1.25;
        procuctoSe.Postre = document.getElementById('Postre').value;
    }
    procuctoSe.totalPago = precio;

    procuctosRegistro.push(procuctoSe);
    console.log(procuctosRegistro);
    localStorage.setItem("Registro de productos",JSON.stringify(procuctosRegistro));


    precioRegistro.style.textAlign = 'center';
    precioRegistro.innerHTML = "Total a pagar $" + precio;

    //para llenar el txtbox
    document.getElementById('txtTotalPagar').value = precio;
}

var btnenviar = document.getElementById('btnEnviar');
var checks = document.querySelectorAll('.productos');
var registro = document.getElementById('registro');

btnenviar.addEventListener('click',function(){
    preciosPodcuto();
    vista.innerHTML = txtComenatarios.value = '';
    registro.innerHTML = '';

    checks.forEach((e)=>{
        if(e.checked == true){
            var registrar = document.createElement('li');
            registrar.innerHTML = e.value;
            registro.appendChild(registrar);
        }
    });
    var factura = document.getElementById('factura');
    factura.style.display = 'block';
});

btnenviar.addEventListener('click',function uncheckAll(){
    document.querySelectorAll('.productos').forEach(function(checkElement) {
        checkElement.checked = false;
    });
});


//validar que se marque un radio button (no funciona queda marcador en vez de desmarcarse cada radio) 
function validar(){
    var m ="false";
    for(var i=0;i<document.menu.length;i++){
        if(document.menu.combos[i].value){
        m="true";
        }
    }
    if(m =="false"){
    alert("debe seleccionar uno combos");
    }
}
