<?php
// Enlaza con archivo que contiene los datos de conexion. Inicializa variables.
require("dbinfo.php");
$resultado = array();

// Obtiene los parametros GET de la URL
$latitud = $_GET["latitud"];
$longitud = $_GET["longitud"];
$radio = $_GET["radio"];

// Inicia la conexion con el servidor de mySQL
$connection=mysql_connect (localhost, $username, $password);
if (!$connection) {
  die("Error al conectar: " . mysql_error());
}

// Inicia la conexion de base de datos.
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ("Imposible conectar BD: " . mysql_error());
}

// Realiza la busqueda de puntos en la tabla.
$query = sprintf("SELECT direccion, nombre, lat, lon, ( 6371 * acos( cos( radians('%s') ) * cos( radians( lat ) ) * cos( radians( lon ) - radians('%s') ) + sin( radians('%s') ) * sin( radians( lat ) ) ) ) AS distance FROM puntos HAVING distance < '%s' ORDER BY distance",
  mysql_real_escape_string($latitud),
  mysql_real_escape_string($longitud),
  mysql_real_escape_string($latitud),
  mysql_real_escape_string($radio));
$result = mysql_query($query);
if (!$result) {
  die("Consulta Invalida: " . mysql_error());
}

//Recorre los elementos para generar la respuesta
while($elemento= mysql_fetch_array($result)){
    array_push($resultado,$elemento);
    }
//Limpia memoria de la consulta de mySQL
mysql_free_result($result);

//Imprime un objeto Json con el resultado de la consulta.
header("Content-type: application/json");
echo json_encode($resultado);
?>