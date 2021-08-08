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
```sh
No es necesario persistir la información editada o agregada, con que solo
se muestre que la información cambió mientras la página no se recargue es
suficiente.
```

## Ejercicio 4

Agregar al proyecto usado:
- Consulta los posts listados en https://jsonplaceholder.typicode.com/posts
- Usando mejores prácticas.
