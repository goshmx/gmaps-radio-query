var radio, mapa, marker, markersArray = [];
/**
 * @fileoverview Archivo de interaccion con google maps.
 *
 * @author Gosh
 * @version 0.1
 */


/**
 * Funcion de carga inicial de mapa
 * @description Inicializa la carga del mapa, marker de consulta y radio de accion.
 */
function inicia_mapa() {
    var posicion_inicial = new google.maps.LatLng(17.052728,-96.706424);
    var configuracion_mapa = {
        scaleControl: true,
        center: posicion_inicial,
        zoom: 15
    };
    mapa = new google.maps.Map(document.getElementById('mapa'), configuracion_mapa);
    marker = new google.maps.Marker({
        map: mapa,
        position: posicion_inicial,
        draggable: true,
        icon: "http://maps.google.com/mapfiles/marker_black.png"
    });
    var configuracion_radio = {
        strokeColor: "#002a80",
        strokeOpacity: 0.1,
        strokeWeight: 1,
        fillColor: "#149bdf",
        fillOpacity: 0.35,
        map: mapa,
        center: posicion_inicial,
        radius: 1000
    };
    radio = new google.maps.Circle(configuracion_radio);
    /* Define Listeners para el mapa y el marker */
    google.maps.event.addListener(marker, 'dragend', function() {
        var posicion = marker.getPosition();
        define_posiciones(posicion);
    });
    google.maps.event.addListener(mapa, 'click', function(pos) {
        var posicion = pos.latLng;
        marker.setPosition(posicion);
        define_posiciones(posicion);
    });
    define_posiciones(posicion_inicial);
}
google.maps.event.addDomListener(window, 'load', inicia_mapa);

/**
 * Funcion Define Posiciones
 * @description Inicializa la carga del mapa, marker de consulta y radio de accion.
 * @param {Object} pos Posicion en formato LatLng de google maps
 */
function define_posiciones(pos){
    radio.setCenter(pos);
    $('#latitud').val(pos.lat());
    $('#longitud').val(pos.lng());
}
/**
 * Funcion Inserta Punto
 * @description Recibe un objeto, con la informacion del punto y genera un marker en el mapa, insertando en markersArray para control.
 * @param {String} item objeto con la informacion del punto consultado.
 */
function inserta_punto(item){
    var posicion = new google.maps.LatLng(item.lat,item.lon);
    var marker = new google.maps.Marker({
        position: posicion,
        map: mapa,
        title: item.nombre
    });
    markersArray.push(marker);
}
/**
 * Funcion Limpia mapa
 * @description Si la variable markersArray contiene algun valor, la recorre para desactivar los marcadores del mapa, asignadose al final de proceso un longitud 0.
 */
function limpia_mapa() {
    if(markersArray){
    for (var i = 0; i < markersArray.length; i++ ) {
        markersArray[i].setMap(null);
    }
    markersArray.length = 0;
    }
}