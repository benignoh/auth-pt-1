// 1) Inicializar los plugins y la aplicacion
var express = require('express');
var app = express();
var basicAuth = require('basic-auth');

// 2) Declarar las URLs del servidor
app.get('/', function(req, res){
	var credentials = basicAuth(req); // {name: ..., pass: ...}

	// 4) Verificamos que las credenciales sean correctas
	if(!!credentials && credentials.name == 'john' && credentials.pass == 'secret'){
		return res.send('Hello World!');
	} else{
		return res.send('Access denied');
	}
})

// 3) Encender el servidor web en un puerto
app.listen(3000, function(){
	console.log('Server on: http://localhost:3000');
});
