var http = require('http');

// Crear un servidor http que contesta "Hola mundo" a cualquier petición que se le haga
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hola mundo\n");
});

// Decimos que el servidor estará escuchando en el puerto 8000
server.listen(8000);

// Imprimir en consola que funcionó!
console.log("Funcionando en http://127.0.0.1:8000/");