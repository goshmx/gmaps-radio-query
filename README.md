# _gmaps-radio-query_

_Ejemplo de consulta de puntos sobre una base de datos MySQL y utilizando la libreria de google maps._

## Setup

_La configuracion es bastante simple, solo requiere un servidor apache con MySQL._

1. _Cargar la base de datos de prueba incluida_
2. _modificar la conexion con el archivo php en la carpeta /consulta/dbinfo.php_

## Como funciona?

### _Frontend Google Maps_

- _Mediante el uso de google maps se inicia el servicio, con un marker "pivote" y usando la libreria de dibujo, se traza un radio._
- _En base a las consulta se escucha el evento de cambio de combo y se redibuja el radio cada vez._
- _Se escucha el evento del boton, y se realiza una consulta Json al servicio de php._

### _Backend PHP_

- _Se reciben las variables GET de la peticion._
- _Se realiza la consulta y se envia la respuesta en formato json._

### Por desarrollar

- _Agregar infowindows para mostrar informacion adicional._
- _Generar estados de respuesta a las peticiones en caso de no arrojar ningun resultado._
- _Extender el proyecto para hacer busquedas por direccion utilizando geocoder._


## License
_Copyright (c) 2014 Gosh http://goshmx.com_

_Se concede permiso por la presente, de forma gratuita, a cualquier persona
 que obtenga una copia de este software y de los archivos de documentación
 asociados (el "Software"), para utilizar el Software sin restricción,
 incluyendo sin limitación los derechos de usar, copiar, modificar, fusionar,
 publicar, distribuir, sublicenciar, y/o vender copias de este Software, y
 para permitir a las personas a las que se les proporcione el Software a
 hacer lo mismo, sujeto a las siguientes condiciones:_

_El aviso de copyright anterior y este aviso de permiso se incluirán en todas
 las copias o partes sustanciales del Software._

_EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA
 O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN,
 IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
 AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN,
 DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UN LITIGIO, AGRAVIO O DE OTRO MODO,
 QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN
 EL SOFTWARE._
