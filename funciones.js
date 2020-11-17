//MODALRESERVA 

$('#myBtn').click(function(event) {
    $('#myModal').css('display', 'block');

    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Set height and width to mask to fill up the whole screen
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
function Reserva(clase, alumno, fechaDeReserva, fechaDeClase, numeroReserva) {
    this.clase = clase;
    this.alumno = alumno;
    this.fechaDeReserva = fechaDeReserva;
    this.fechaDeClase = fechaDeClase;
    this.numeroReserva = numeroReserva;
};

var arrayClases = [];

var arrayAlumnos = [];

var arrayReserva = [];

var numeroDeReserva = 0; // se le suma 1 por cada reserva

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


//funciones reserva

$(".yM").click(function() {

    str = document.querySelector("#fechaClase").value;
    console.log(str); //cuando la paso como parametro de new Date me resta un dia

    if (arrayReserva.length < 50) {

        numeroDeReserva = (numeroDeReserva + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[0],
            alumno = new Alumnos(nombre = document.querySelector("#name").value,
                apellido = document.querySelector("#apellido").value,
                dni = parseInt(document.querySelector("#dni").value),
                mail = document.querySelector("#email").value,
                tel = parseInt(document.querySelector("#tel").value)
            ), fechaDeReserva = new Date(), fechaDeClase = sumarDias(new Date(str), +1), numeroReserva = numeroDeReserva));

        arrayAlumnos.push(alumno);

    } else {
        alert("La Clase está completa, elija otra o escribame directamente para la lista de espera");

    };


    console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva); //me imprime mal la fechaDeClase

    console.log(reserva);

});

$(".yJ").click(function() {

    str = document.querySelector("#fechaClase").value;
    console.log(str);

    if (arrayReserva.length < 50) {

        numeroDeReserva = (numeroDeReserva + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[1],
            alumno = new Alumnos(nombre = document.querySelector("#name").value,
                apellido = document.querySelector("#apellido").value,
                dni = parseInt(document.querySelector("#dni").value),
                mail = document.querySelector("#email").value,
                tel = parseInt(document.querySelector("#tel").value)
            ), fechaDeReserva = new Date(), fechaDeClase = sumarDias(new Date(str), +1), numeroReserva = numeroDeReserva
        ));

        arrayAlumnos.push(alumno);

    } else {
        alert("La Clase está completa, elija otra o escribame directamente para la lista de espera");
    };


    console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva); //me imprime mal la fechaDeClase

    console.log(reserva);

});

$(".yY").click(function() {

    str = document.querySelector("#fechaClase").value;
    console.log(str);

    if (arrayReserva.length < 50) {

        numeroDeReserva = (numeroDeReserva + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[2],
            alumno = new Alumnos(nombre = document.querySelector("#name").value,
                apellido = document.querySelector("#apellido").value,
                dni = parseInt(document.querySelector("#dni").value),
                mail = document.querySelector("#email").value,
                tel = parseInt(document.querySelector("#tel").value)
            ), fechaDeReserva = new Date(), fechaDeClase = sumarDias(new Date(str), +1), numeroReserva = numeroDeReserva
        ));

        arrayAlumnos.push(alumno);

    } else {
        alert("La Clase está completa, elija otra o escribame directamente para la lista de espera");

    };


    console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva); //me imprime mal la fechaDeClase

    console.log(reserva);

});

$(".cY").click(function() {

    str = document.querySelector("#fechaClase").value;
    console.log(str);

    if (arrayReserva.length < 10) {

        numeroDeReserva = (numeroDeReserva + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[3],
            alumno = new Alumnos(nombre = document.querySelector("#name").value,
                apellido = document.querySelector("#apellido").value,
                dni = parseInt(document.querySelector("#dni").value),
                mail = document.querySelector("#email").value,
                tel = parseInt(document.querySelector("#tel").value)
            ), fechaDeReserva = new Date(), fechaDeClase = sumarDias(new Date(str), +1), numeroReserva = numeroDeReserva
        ));

        arrayAlumnos.push(alumno);

    } else {
        alert("La Clase está completa, elija otra o escribame directamente para la lista de espera");

    };


    console.table(arrayAlumnos);

    console.log(fechaClase);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva); //me imprime mal la fechaDeClase

    console.log(reserva);


});

$(".zR").click(function() {

    str = document.querySelector("#fechaClase").value;
    console.log(str);

    if (arrayReserva.length < 50) {

        numeroDeReserva = (numeroDeReserva + 1);

        arrayReserva.push(new Reserva(clase = arrayClases[4],
            alumno = new Alumnos(nombre = document.querySelector("#name"),
                apellido = document.querySelector("#apellido"),
                dni = parseInt(document.querySelector("#dni")),
                mail = document.querySelector("#email"),
                tel = parseInt(document.querySelector("#tel"))
            ), fechaDeReserva = new Date(), fechaDeClase = sumarDias(new Date(str), +1), numeroReserva = numeroDeReserva
        ));

        arrayAlumnos.push(alumno);

    } else {
        alert("La Clase está completa, elija otra o escribame directamente para la lista de espera desde el formulario de contacto");

    };

    console.table(arrayAlumnos);

    console.table(arrayReserva);

    /*console.log(sumarDias(fechaDeClase, +7));
    console.log(sumarDias(fechaDeClase, +15));*/

    let reserva = JSON.stringify(arrayReserva); //me imprime mal la fechaDeClase

    console.log(reserva);

});

console.log(JSON.stringify(arrayClases));