$(document).ready(
    function () {
        $("#msj_error4").hide();

    }
);
function rechazarObra() {
    let comentario = $("#comentario").val();

   

    let mensaje = "";

    if (comentario == '') {
        mensaje += "Falta información en el motivo del rechazo <br>";
    }

    if (mensaje != '') {
        $("#msj_error4").show();
        $("#texto_error4").html(mensaje);
    } else {
        $("#msj_error4").hide();

        //peticiones ajax
    }

    event.preventDefault();
}