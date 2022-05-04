$(document).ready(
    function () {
        $("#msj_error5").hide();

    }
);
function contactenos() {
    let nombre = $("#nombreCont").val();
    let correo = $("#correoCont").val();
    let telefono = $("#telCont").val();
    let comentario = $("#comCont").val();

   

    let mensaje = "";

    if (nombre == '') {
        mensaje += "Falta información en el nombre <br>";
    }
    if (correo == '') {
        mensaje += "Falta información en el correo <br>";
    }
    if (telefono == '') {
        mensaje += "Falta información en el numero de telefono <br>";
    }
    if (comentario == '') {
        mensaje += "Falta información en el comentario <br>";
    }

    if (mensaje != '') {
        $("#msj_error5").show();
        $("#texto_error5").html(mensaje);
    } else {
        $("#msj_error5").hide();

        //peticiones ajax
    }

    event.preventDefault();
}