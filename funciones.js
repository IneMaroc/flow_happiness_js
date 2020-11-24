//MODALRESERVA 

$('#myBtn').click(function(event) {
    $('#myModal').css('display', 'block');

    //obtiene el alto y el ancho
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Determina alto y ancho para cubrir la pantalla
    $('.modalMask').css({ 'width': maskWidth, 'height': maskHeight });
});
$('.close').click(function(event) {
    $('#myModal').css('display', 'none');
});
$('.modalMask').click(function(event) {
    $('#myModal').css('display', 'none');
});

///////////////////////////////////////////////////////////

//CONTENIDO MODAL

//Constructor Clases
function Clases(nombre, dia, hora, vacantes, precio) {
    this.nombre = nombre;
    this.dia = dia;
    this.hora = hora;
    this.vacantes = vacantes;
    this.precio = precio;
};

//constructor Alumnos
function Alumnos(nombre, apellido, dni, mail, tel) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.mail = mail;
    this.tel = tel;
};

//constructor Reserva
function Reserva(clase, alumno, fechaDeReserva, fechaDeClase, numeroReservaDiario) {
    this.clase = clase;
    this.alumno = alumno;
    this.fechaDeReserva = fechaDeReserva;
    this.fechaDeClase = fechaDeClase;
    this.numeroReservaDiario = numeroReservaDiario;

};

var numeroDeReservaDiario = 0; // se le suma 1 por cada reserva


// ARRAYS
var arrayClases = [];

var arrayAlumnos = [];

var arrayReserva = [];

//Variables Clases predefinidas
var clase1 = new Clases("Yoga Fusion Martes", "Martes", "19 a 20:30", 50, 500);
var clase2 = new Clases("Yoga Fusion Jueves", "Jueves", "19 a 20:30", 50, 500);
var clase3 = new Clases("Yin Yoga", "Miércoles", "19 a 20:30", 50, 500);
var clase4 = new Clases("Caminata + Yoga", "Sábados", "10 a 11:30", 10, 500);
var clase5 = new Clases("Zumba + Relax", "Lunes", "19 a 20:30", 50, 500);

arrayClases.push(clase1, clase2, clase3, clase4, clase5);

console.table(arrayClases);

// variables alumno
var alumno = [];
var nombre = "";
var apellido = "";
var dni = 0;
var mail = "";
var tel = 0;


// variables fechas

var str = "18/10/2020";

//funciones fechas

function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
};

//funcion localStorage


//funciones validacion formulario

var input1 = "";
var input2 = "";
var input3 = 0;
var input4 = "";
var input5 = 0;


var validacion = false;

function validarNombre(valor) {

    if (valor == null || valor.length == 0) {

        console.log("No dejar en blanco");
        $('.alertaNombre').css('display', 'block');

        return validacion = false;
    } else {
        $('.alertaNombre').css('display', 'none');
        return validacion = true;
    }
};

function validarApellido(valor) {

    if (valor == null || valor.length == 0) {

        console.log("No dejar en blanco");
        $('.alertaApellido').css('display', 'block');
        return validacion = false;
    } else {
        $('.alertaApellido').css('display', 'none');
        return validacion = true;
    }
};

function validarDocumento(valor) {

    if (valor == null || valor.length == 0 || (isNaN(valor))) {
        console.log("No dejar en blanco, escribir solo números");
        $('.alertaDocumento').css('display', 'block');
        return validacion = false;
    } else {
        $('.alertaDocumento').css('display', 'none');
        return validacion = true;

    }
};

function validarCorreo(valor) {

    if (valor == null || valor.length == 0 || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(valor))) {

        console.log("No has ingresado tu mail o el formato no es correcto");
        $('.alertaCorreo').css('display', 'block');
        return validacion = false;
    } else {
        $('.alertaCorreo').css('display', 'none');
        return validacion = true;
    }
};

function validarTelefono(valor) {

    if (valor == null || valor.length == 0 || (isNaN(valor))) {
        console.log("No dejar en blanco, escribir solo números");
        $('.alertaTelefono').css('display', 'block');
        $('#tel').css('border', 'solid $especialv1');
        return validacion = false;
    } else {
        $('.alertaTelefono').css('display', 'none');
        return validacion = true;
    }
};


//funciones reserva

$(".yM").click(function() {

    $('.alertaClaseCompleta').css('display', 'none');

    input1 = document.querySelector("#name").value.toLowerCase();
    input2 = document.querySelector("#apellido").value.toLowerCase();
    input3 = parseInt(document.querySelector("#dni").value);
    input4 = document.querySelector("#email").value.toLowerCase();
    input5 = parseInt(document.querySelector("#tel").value);

    validarNombre(input1);
    validarApellido(input2);
    validarDocumento(input3);
    validarCorreo(input4);
    validarTelefono(input5);


    str = document.querySelector("#fechaClase").value;
    //console.log(str); 

    var yogaMartes = arrayReserva.filter(function(reservar) {
        return reservar.clase.nombre === 'Yoga Fusion Martes';
    });
    //console.log(yogaMartes);

    if (yogaMartes.length < 50 && validacion == true) {

        numeroDeReservaDiario = (numeroDeReservaDiario + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[0],
            alumno = new Alumnos(nombre = input1, apellido = input2,
                dni = input3, mail = input4, tel = input5), fechaDeReserva = new Date(), fechaDeClase = str, numeroReservaDiario = numeroDeReservaDiario));

        arrayAlumnos.push(alumno);


        $('.reservaExitosa').text('Tu número de reserva para Yoga Fusión Martes es ' + numeroReservaDiario + ' para el día ' + fechaDeClase + '. ¡Qué disfrutes la Clase!');

        $('.reservaExitosa').css('display', 'block');


    } else {
        $('.alertaClaseCompleta').css('display', 'block');
        $('.reservaExitosa').css('display', 'none');

    };

    //console.table(arrayAlumnos);

    console.table(arrayReserva);
    console.table(yogaMartes);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +14));*/

    let reserva = JSON.stringify(arrayReserva);

    console.log(reserva);

});

$(".yJ").click(function() {

    $('.alertaClaseCompleta').css('display', 'none');

    input1 = document.querySelector("#name").value.toLowerCase();
    input2 = document.querySelector("#apellido").value.toLowerCase();
    input3 = parseInt(document.querySelector("#dni").value);
    input4 = document.querySelector("#email").value.toLowerCase();
    input5 = parseInt(document.querySelector("#tel").value);

    validarNombre(input1);
    validarApellido(input2);
    validarDocumento(input3);
    validarCorreo(input4);
    validarTelefono(input5);

    str = document.querySelector("#fechaClase").value;
    //console.log(str);

    var yogaJueves = arrayReserva.filter(function(reservar) {
        return reservar.clase.nombre === 'Yoga Fusion Jueves';
    });

    //console.log(yogaJueves);

    if (yogaJueves.length < 50 && validacion == true) {

        numeroDeReservaDiario = (numeroDeReservaDiario + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[1],
            alumno = new Alumnos(nombre = input1, apellido = input2,
                dni = input3, mail = input4, tel = input5), fechaDeReserva = new Date(), fechaDeClase = str, numeroReservaDiario = numeroDeReservaDiario));


        arrayAlumnos.push(alumno);

        $('.reservaExitosa').text('Tu número de reserva para Yoga Fusión Jueves es ' + numeroReservaDiario + ' para el día ' + fechaDeClase + '. ¡Qué disfrutes la Clase!');

        $('.reservaExitosa').css('display', 'block');

    } else {
        $('.alertaClaseCompleta').css('display', 'block');
        $('.reservaExitosa').css('display', 'none');
    };

    //console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva);

    console.log(reserva);

});

$(".yY").click(function() {

    $('.alertaClaseCompleta').css('display', 'none');

    input1 = document.querySelector("#name").value.toLowerCase();
    input2 = document.querySelector("#apellido").value.toLowerCase();
    input3 = parseInt(document.querySelector("#dni").value);
    input4 = document.querySelector("#email").value.toLowerCase();
    input5 = parseInt(document.querySelector("#tel").value);

    validarNombre(input1);
    validarApellido(input2);
    validarDocumento(input3);
    validarCorreo(input4);
    validarTelefono(input5);

    str = document.querySelector("#fechaClase").value;
    console.log(str);

    var yogaYin = arrayReserva.filter(function(reservar) {
        return reservar.clase.nombre === 'Yin Yoga';
    });

    //console.log(yogaYin);

    if (yogaYin.length < 50 && validacion == true) {

        numeroDeReservaDiario = (numeroDeReservaDiario + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[2],
            alumno = new Alumnos(nombre = input1, apellido = input2,
                dni = input3, mail = input4, tel = input5), fechaDeReserva = new Date(), fechaDeClase = str, numeroReservaDiario = numeroDeReservaDiario));


        arrayAlumnos.push(alumno);

        $('.reservaExitosa').text('Tu número de reserva para Yin Yoga es ' + numeroReservaDiario + ' para el día ' + fechaDeClase + '. ¡Qué disfrutes la Clase!');

        $('.reservaExitosa').css('display', 'block');

    } else {
        $('.alertaClaseCompleta').css('display', 'block');
        $('.reservaExitosa').css('display', 'none');

    };

    console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva);

    console.log(reserva);

});

$(".cY").click(function() {

    $('.alertaClaseCompleta').css('display', 'none');

    input1 = document.querySelector("#name").value.toLowerCase();
    input2 = document.querySelector("#apellido").value.toLowerCase();
    input3 = parseInt(document.querySelector("#dni").value);
    input4 = document.querySelector("#email").value.toLowerCase();
    input5 = parseInt(document.querySelector("#tel").value);

    validarNombre(input1);
    validarApellido(input2);
    validarDocumento(input3);
    validarCorreo(input4);
    validarTelefono(input5);

    str = document.querySelector("#fechaClase").value;
    //console.log(str);

    var camYoga = arrayReserva.filter(function(reservar) {
        return reservar.clase.nombre === 'Caminata + Yoga';
    });

    //console.log(camYoga);

    if (camYoga.length < 10 && validacion == true) {


        numeroDeReservaDiario = (numeroDeReservaDiario + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[3],
            alumno = new Alumnos(nombre = input1, apellido = input2,
                dni = input3, mail = input4, tel = input5), fechaDeReserva = new Date(), fechaDeClase = str, numeroReservaDiario = numeroDeReservaDiario));


        arrayAlumnos.push(alumno);

        $('.reservaExitosa').text('Tu número de reserva para Caminata + Yoga es ' + numeroReservaDiario + ' para el día ' + fechaDeClase + '. ¡Qué disfrutes la Clase!');

        $('.reservaExitosa').css('display', 'block');

    } else {
        $('.alertaClaseCompleta').css('display', 'block');
        $('.reservaExitosa').css('display', 'none');

    };

    //console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva);

    console.log(reserva);


});

$(".zR").click(function() {

    $('.alertaClaseCompleta').css('display', 'none');

    input1 = document.querySelector("#name").value.toLowerCase();
    input2 = document.querySelector("#apellido").value.toLowerCase();
    input3 = parseInt(document.querySelector("#dni").value);
    input4 = document.querySelector("#email").value.toLowerCase();
    input5 = parseInt(document.querySelector("#tel").value);

    validarNombre(input1);
    validarApellido(input2);
    validarDocumento(input3);
    validarCorreo(input4);
    validarTelefono(input5);

    str = document.querySelector("#fechaClase").value;
    //console.log(str);

    var zumRel = arrayReserva.filter(function(reservar) {
        return reservar.clase.nombre === 'Zumba + Relax';
    });

    //console.log(zumRel);

    if (zumRel.length < 50 && validacion == true) {

        numeroDeReservaDiario = (numeroDeReservaDiario + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[4],
            alumno = new Alumnos(nombre = input1, apellido = input2,
                dni = input3, mail = input4, tel = input5), fechaDeReserva = new Date(), fechaDeClase = str, numeroReservaDiario = numeroDeReservaDiario));


        arrayAlumnos.push(alumno);

        $('.reservaExitosa').text('Tu número de reserva para Zumba + Relax es ' + numeroReservaDiario + ' para el día ' + fechaDeClase + '. ¡Qué disfrutes la Clase!');

        $('.reservaExitosa').css('display', 'block');


    } else {
        $('.alertaClaseCompleta').css('display', 'block');
        $('.reservaExitosa').css('display', 'none');

    };

    //console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva);

    console.log(reserva);

});

console.log(JSON.stringify(arrayClases));