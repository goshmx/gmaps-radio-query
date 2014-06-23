/**
 * @fileoverview Archivo de consulta de sistema y conexion con el servicio JSON de consulta de puntos.
 *
 * @author Gosh
 * @version 0.1
 */
$(document).ready(function(){
    $("form").submit(function() { return false; });
    $('#id_radio').on('change', function(){
        var nuevo_radio = parseFloat($(this).val())*1000;
        radio.setRadius((parseInt(nuevo_radio)));
    });
    $('#btn_consulta').on('click',function(){
        consulta_puntos();
    });
});


/**
 * Funcion Consulta Puntos
 * @description Mediante la peticion GET al recurso 'consulta/consulta.php' envia 'lat', 'lon' y 'radio', recorriendo el objeto obtenido como resultado.
 * Posteriormente llamando la funcion 'inserta_punto'
 */
function consulta_puntos(){
    datos = $('#form_consulta').serialize();
    $.getJSON( "consulta/consulta.php", datos, function( data ) {
        limpia_mapa();
        $.each( data, function( i, item ) {
            inserta_punto(item);
        });
    });
}