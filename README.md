# CRUD - Mi Águila

Proyecto realizado con react,redux y utilizando git flow. Se trata basicamente de un panel de usuario donde puede ver los distintos usuarios de la plataforma, tambien puede ver,eliminar y editar sus tareas.

La parte del login tiene validaciones hechas con estados de react y viendo que pasen ciertas expresiones regulares. Luego me fui al inicio donde por medio de flex pude dividir en 3 cajas principales lo que es sidebar, navbar y container. De ahi pase a lo que es la lista de usuarios donde no lo hice con una tabla para poder manejar mejor el responsive. Una vez terminado usuarios me dirigi a las tareas donde realize el crud con redux y agregando un formulario para editar las tareas. Lo ultimo fue armar la logica de la session para que no dure mas de 5 minutos si el usuario no esta disponible, esto lo realize con un modal en React Portal y con un setInterval. Extra: Agregue un logout y algunos estilos responsive.

## Como funciona

Dentro de la carpeta del repositorio simplemente ejecutar:

### `npm install`

### `npm start`

Abrir en el navegador la siguiente url [http://localhost:3000](http://localhost:3000)

Una vez en el inicio puede indicar cualquier email(que contenga formato de email) o contraseña(mayor a 7 caracteres, que contenga una mayuscula y al menos un numero) y va a ingresar al panel de ignacio contreras. Esta parte no me quedo muy claro sobre como resolver el login ya que no habia contra que compararlo en la api que me habian facilitado o al menos no lo encontre.
