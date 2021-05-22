# pf-nodejs-t

##Alumno : ISRAEL LADRON DE GUEVARA DOMINGO

proyecto final taller node js uaq
Funcionamiento :<br>
Base de datos : IBM-Cloudant NOsql DataBase<br>
Yarn : Dev enviorment and build <br>
correr en local yarn start<br>
instalar en local yarn install<br>
##la base de datos esta en la cloud esa no corre en local y solo s puede accesar desde la app o usando el api. <br>
<b>····Rutas·····</b><br>
para logearse # solo admin es /user usando post<br>
usuario admin : nombre zero password 112333<br> dentro de la request via post usar x-www-form-urlencoded con las keys como user_mail y user_password<br>
este solo se puede crear desde la base de datos a la cual solo yo tengo acceso asi que terceros usando la app no pueden crear un usuario admin.<br>
la base de datos de admin y de registro de usuarios vanilla estan separadas son 2 db diferentes.<br>
par crear un registro es bajo /admin/ usando post pasando los datos de  nombre , apellido , correo y direccion en el body en x-www-form-urlencoded<br>
para buscar un registro por nombre es bajo /admin/find pasas el nombre y te lanzara un json con todos los registros con ese nombre y la demas data incuyendo el _id y el rev estos se usaran para borrar los registros.<br>
para borrar es bajo /admin/ con el metodo de delete pasas en el body en x-www-form-urlencoded el _id y el rev <br>
para modificar es bajo /admin/ usando put y pasando la data pormedio del body en x-www-form-urlencoded se tiene que pasar el _id de el registro para que funcione <br>
### Heroku URL https://talleres-js.herokuapp.com<br> --- deploy de prod api
