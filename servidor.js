// Obtener módulo http
const http = require('http')

// Constantes para host y puerto
const host = 'localhost';
const port = 8080;

// Listener que responde con nombre y JSON  
const listener = function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({mensage: 'Hola Mundo'}));
  res.end();
}

// Crear servidor
const server = http.createServer(listener);

// Levantar servidor e imprimir mensaje
const chalk = require('chalk');
server.listen(port, host, () => {
  console.log(chalk.green(`Server running at http://${host}:${port}`)); 
});
