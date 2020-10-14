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



//Clases predefinidas
var clase1 = new Clases("Yoga Fusion Martes", "Martes", "19 a 20:30", 50, 500);
var clase2 = new Clases("Yoga Fusion Jueves", "Jueves", "19 a 20:30", 50, 500);
var clase3 = new Clases("Yin Yoga", "Miércoles", "19 a 20:30", 50, 500);
var clase4 = new Clases("Caminata + Yoga", "Sábados", "10 a 11:30", 10, 500);
var clase5 = new Clases("Zumba + Relax", "Lunes", "19 a 20:30", 50, 500);


var arrayClases = [];

var arrayAlumnos = [];

var arrayReserva0 = [];
var arrayReserva1 = [];
var arrayReserva2 = [];
var arrayReserva3 = [];
var arrayReserva4 = [];


arrayClases.push(clase1, clase2, clase3, clase4, clase5);

console.table(arrayClases);

var numeroDeReserva = 0; // se le suma 1 por cada reserva

//PROVISORIO hasta tener los botones
var claseElegida = document.querySelector("#clase").value;

console.table(claseElegida);

if (claseElegida == "yoga fusion martes" && arrayReserva0.length < 50) {

    numeroDeReserva = (numeroDeReserva + 1);

    arrayReserva0.push(new Reserva(clase = arrayClases[0],
        alumno = arrayAlumnos.push(new Alumnos(nombre = document.querySelector("#name"),
            apellido = document.querySelector("#apellido"),
            dni = parseInt(document.querySelector("#dni")),
            mail = document.querySelector("#email"),
            tel = parseInt(document.querySelector("#tel"))
        )), fechaDeReserva = new Date(), fechaDeClase = new Date(fechaclase = document.querySelector("fechaClase")), numeroReserva = numeroDeReserva
    ));

} else if (claseElegida == "yoga fusion jueves" && arrayReserva1.length < 50) {

    numeroDeReserva = (numeroDeReserva + 1);

    arrayReserva1.push(new Reserva(clase = arrayClases[1],
        alumno = arrayAlumnos.push(new Alumnos(nombre = document.querySelector("#name"),
            apellido = document.querySelector("#apellido"),
            dni = parseInt(document.querySelector("#dni")),
            mail = document.querySelector("#email"),
            tel = parseInt(document.querySelector("#tel"))
        )), fechaDeReserva = new Date(), fechaDeClase = new Date(fechaclase = document.querySelector("fechaClase")), numeroReserva = numeroDeReserva
    ));

} else if (claseElegida == "yin yoga" && (arrayReserva2.length < 50)) {

    numeroDeReserva = (numeroDeReserva + 1);

    arrayReserva2.push(new Reserva(clase = arrayClases[2],
        alumno = arrayAlumnos.push(new Alumnos(nombre = document.querySelector("#name"),
            apellido = document.querySelector("#apellido"),
            dni = parseInt(document.querySelector("#dni")),
            mail = document.querySelector("#email"),
            tel = parseInt(document.querySelector("#tel"))
        )), fechaDeReserva = new Date(), fechaDeClase = new Date(fechaclase = document.querySelector("fechaClase")), numeroReserva = numeroDeReserva
    ));

} else if (claseElegida == "caminata + yoga" && arrayReserva3.length < 10) {

    numeroDeReserva = (numeroDeReserva + 1);

    arrayReserva3.push(new Reserva(clase = arrayClases[3],
        alumno = arrayAlumnos.push(new Alumnos(nombre = document.querySelector("#name"),
            apellido = document.querySelector("#apellido"),
            dni = parseInt(document.querySelector("#dni")),
            mail = document.querySelector("#email"),
            tel = parseInt(document.querySelector("#tel"))
        )), fechaDeReserva = new Date(), fechaDeClase = new Date(fechaclase = document.querySelector("fechaClase")), numeroReserva = numeroDeReserva
    ));

} else if (claseElegida == "zumba + relax" && arrayReserva4.length < 50) {

    numeroDeReserva = (numeroDeReserva + 1);

    arrayReserva4.push(new Reserva(clase = arrayClases[4],
        alumno = arrayAlumnos.push(new Alumnos(nombre = document.querySelector("#name"),
            apellido = document.querySelector("#apellido"),
            dni = parseInt(document.querySelector("#dni")),
            mail = document.querySelector("#email"),
            tel = parseInt(document.querySelector("#tel"))
        )), fechaDeReserva = new Date(), fechaDeClase = new Date(fechaclase = document.querySelector("fechaClase")), numeroReserva = numeroDeReserva
    ));

} else {
    alert("La Clase está completa, elija otra o escribame directamente para la lista de espera");

};