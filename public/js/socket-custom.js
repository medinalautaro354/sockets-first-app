var socket = io();

socket.on("connect", function() {
  console.log("Conectado con el servidor");
});
//escuchar
socket.on("disconnect", function() {
  console.log("Perdimos conexion con el servidor");
});

//son para enviar informacion.
socket.emit(
  "enviarMensaje",
  {
    user: "Test",
    menssage: "Hola mundo desde un socket"
  },
  function(resp) {
    console.log("respuesta del server: ", resp);
  }
);

socket.on("enviarMensaje", function(message) {
  console.log(message.message);
});
