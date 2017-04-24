function usuarios(){
  var nombre = document.getElementById("nombres");
  var apellido = document.getElementById("apellidos");

  var correo = document.getElementById("correos");
  var contraseña = document.getElementById("contraseñas");
  var uservalid = false;

  do{
    nombre = prompt("¿Cual es su nombre?");
    }while (nombre == "");

  var nombref = nombre.charAt(0).toUpperCase();
  nombre = nombre.substring(1, nombre.length);
  nombref += nombre.toLowerCase();
  document.write(nombref+" ");

  do{
    apellido = prompt("¿Cual es tu apellido?");
  } while (apellido == "");

var apellidof=apellido.charAt(0).toUpperCase();
apellido = apellido.substring(1,apellido.length);
apellidof += apellido.toLocaleLowerCase();
document.write(apellidof);



do{
  correo = prompt("Ingrese su correo.");
} while (correo== "");
correof = correo.charAt(0);
document.write(correof);
}
document.write(usuario());

function casipalindrome(nombreUsuario){
  var usuario = document.getElementById("nombreUsuarios")(prompt("eliga nombre de Usuario"));
  var n = nombreUsuario.length;
  var ncorresponde =0;
  for (var i = 0; i < n/2; i++) {
    if (nombreUsuario[i]!=nombreUsuario[n-i-1]) {
      ncorresponde =ncorresponde + 1;
    }
  }
}
document.write(nombreUsuario());
