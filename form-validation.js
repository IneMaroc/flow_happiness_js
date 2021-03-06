function validarFormulario() {
    $("form[name='reserva']").validate({

        // Specify validation rules

        rules: {

            // The key name on the left side is the name attribute

            // of an input field. Validation rules are defined

            // on the right side

            firstname: "required",

            lastname: "required",

            email: {

                required: true,

                // Specify that email should be validated

                // by the built-in "email" rule

                email: true

            },

            password: {

                required: true,

                minlength: 5

            }

        },

        // Specify validation error messages

        messages: {

            name: "Por favor, introduzca su nombre",

            apellido: "Por favor, introduzca su apellido",

            documento: {

                required: "Por favor proporcione una contraseña",

                minlength: "Su contraseña debe tener al menos 5 caracteres."

            },

            email: "Por favor, introduce una dirección de correo electrónico válida"

        },

    });

}