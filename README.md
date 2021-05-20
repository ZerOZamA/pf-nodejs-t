# pf-nodejs-t
proyecto final taller node js uaq
Funcionamiento :
Base de datos : IBM-Cloudant NOsql DataBase
Yarn : Dev enviorment and build 
correr en local yarn start
instalar en local yarn install
##la base de datos esta en la cloud esa no corre en local y solo s puede accesar desde la app o usando el api 
····Rutas·····
para logearse # solo admin es /user usando post
usuario admin : nombre zero password 112333
este solo se puede crear desde la base de datos a la cual solo yo tengo acceso asi que terceros usando la app no pueden crear un usuario admin.
la base de datos de admin y de registro de usuarios vanilla estan separadas son 2 db diferentes.
par crear un registro es bajo /admin/ usando post pasando los datos de  nombre , apellido , correo y direccion en el body en x-www-form-urlencoded
para buscar un registro por nombre es bajo /admin/find pasas el nombre y te lanzara un json con todos los registros con ese nombre y la demas data incuyendo el _id y el rev estos se usaran para borrar los registros.
para borrar es bajo /admin/ con el metodo de delete pasas en el body en x-www-form-urlencoded el _id y el rev 
para modificar es bajo /admin/ usando put y pasando la data pormedio del body en x-www-form-urlencoded se tiene que asar el _id de el registro para que funcione 