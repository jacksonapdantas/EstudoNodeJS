var http = require('http'); // require importa algo para o seu script (nesse caso a biblioteca http)

var server = http.createServer( function(req, res){

	var categoria = req.url; //recuperando a url

	if(categoria == '/tecnologia'){
		res.end("<html><body>Notícias de tecnologia</body></html>");
	}else if(categoria == '/moda'){
		res.end("<html><body>Notícias de moda</body></html>");
	}else if(categoria == '/beleza'){
		res.end("<html><body>Notícias de beleza</body></html>");
	}else{
		res.end("<html><body>Portal de notícias</body></html>");//fornencendo uma resposta
	}


});// criando um servidor http

server.listen(3000); //informando a porta do servidor