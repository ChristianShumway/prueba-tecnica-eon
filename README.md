# Christian Michelle Torres Martínez
## Prueba Técnica de Desarrollo Angular Empresa EON

[![N|Solid](https://eon.com.mx/wp-content/uploads/eon-igniting-business-main.png)](https://eon.com.mx/)


## Ejercicio 1

Crear un proyecto en angular con las mejores prácticas posibles.
Utilizar cualquier librería o framework de estilos.

 ```sh
 Componentes
 ```
- header-component
1. Debe contener el ruteo hacia los componentes creados.
- empresa-component
1. Debe consultar el servicio de "persona-service" para obtener un
array de personas.
2. Debe hacer uso del componente "tarjeta-presentacion-component",
iterar cada persona del array enviándole la persona como parámetro.
- tarjeta-presentacion-component
1. Debe tener un parámetro de entrada llamado persona y mostrar los
datos en forma de tarjeta.
- footer-component
1. Sin contenido en especial.
```sh
 Servicios
 ```
- persona-service
2. método getPersonas que retorne un array de Personas (10 personas
como mínimo, datos estáticos).
```sh
 Interfaces o DTO's
 ```
 - Persona
• nombre - string
• edad - number
• frase - string
• direccion - Direccion

- Dirección
• id
• calle
• colonia
• pais

## Ejercicio 2

Agregar al proyecto usado:
- Componente FormularioPersona Utilizar Formularios Reactivos para la clase de Persona (por el momento sin la dirección) . 
- Estudiar/Googlear @Output EventEmitter
- Con una salida (EventEmitter<Persona>) Emita a la persona al dar click en submit, con ello agregarlo al
array.

## Ejercicio 3
Para el formulario de persona.
- Agregar validaciones Required, minlength, pattern.
- Mostrar las leyendas correspondientes si esto no se cumple (Utilizando Formularios Reactivos).
. Agregar modales, Agregar Persona, Editar Persona, Eliminar Persona, con las
validaciones correspondientes.
`
No es necesario persistir la información editada o agregada, con que solo
se muestre que la información cambió mientras la página no se recargue es
suficiente.
`

## Ejercicio 4

Agregar al proyecto usado:
- Consulta los posts listados en https://jsonplaceholder.typicode.com/posts
- Usando mejores prácticas.


 ```sh
 Componente
 ```
Agregar el Componente "TablePostComponent".

Objetivo del componente: 
- Listar en una tabla los posts consultados

Depende de:
- Servicio "Post Service": para obtener el objeto, suscribir los datos (Observable)
- Clase Post: ya que debe contener un Array de tipo Posts donde se almacene 
- la respuesta satisfactoria.


 ```sh
 Servicio
 ```
 
 Objetivo del servicio: 
 - Exponer un método llamado getList el cual retorne el Observable<Post[]> 
 este proviene de http.get<Post[]>(url) donde la url es
 https://jsonplaceholder.typicode.com/posts

Depende de:

- El servicio HttpClient , recordar consultar la documentación :
 https://angular.io/guide/http, recuerden que cualquier servicio es una sola
instancia la cual se inyecta en el constructor, es tomada como una
variable/propiedad de la clase que es accedida por this.
 
```sh
 Interfaces o DTO's
 ```
 Agregar Interfaces o DTO´s necesarios para tipear las respuestas.
 
 ## Ejercicio 5
CONSULTAR LOS COMENTARIOS DE UN POST
Requerimientos:
- Agregar un botón de ver comentarios para cada elemento de la tabla de posts, al
dar click, muestre los comentarios del post seleccionado.
`
API es la misma : https://jsonplaceholder.typicode.com/ <-- analizar y ver qué url te
permite obtener los comentarios de un post
`

 ## Ejercicio 6
Hacer uso de ViewChild en cualquier parte del proyecto que se adecue a este caso.
