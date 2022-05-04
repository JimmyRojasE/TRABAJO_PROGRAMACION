


$(document).ready(
    function () {
        $("#msj_error3").hide();

    }
);
function enviarObra() {
    let nombre1 = $("#nombreObra").val();
    let areaComent = $("#areaComentario").val();
    let descObra = $("#descObra").val();
    let precioObra = $("#precioObra").val();
   

    let mensaje = "";

    if (nombre1 == '') {
        mensaje += "Falta información en el nombre de la obra <br>";
    }
    if (areaComent == '') {
        mensaje += "Falta información en la historia de obra <br>";
    }
    if (descObra == '') {
        mensaje += "Falta información en la descripcion de la obra <br>";
    }
    if (precioObra == '') {
        mensaje += "Falta información en el precio de la obra";
    }

    if (mensaje != '') {
        $("#msj_error3").show();
        $("#texto_error3").html(mensaje);
    } else {
        $("#msj_error3").hide();

        //peticiones ajax
    }

    event.preventDefault();
}