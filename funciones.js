//MODALRESERVA - desafio eventos

// Get the modal
var modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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

// variables botones clases

var ym = document.querySelector(".yM");
var yj = document.querySelector(".yJ");
var yy = document.querySelector(".yY");
var cy = document.querySelector(".cY");
var zr = document.querySelector(".zR");

// variables fechas

var str = "18/10/2020";

//funciones fechas

function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
};

//funcion localStorage



//funciones reserva

ym.onclick = function() {

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

};

yj.onclick = function() {

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

};

yy.onclick = function() {

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

};

cy.onclick = function() {

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


};

zr.onclick = function() {

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

};

console.log(JSON.stringify(arrayClases));