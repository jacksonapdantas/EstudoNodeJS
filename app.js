
//#importando o servidor#/
var app = require('./config/server'); //recuperando o servidor atravé do módulo

//#importando e excutando as rotas #/

//var rota_home = require('./app/routes/home')(app); 

//var rota_inclusao_noticias = require('./app/routes/formulario_inclusao_noticia')(app); //Inclusão de noticia

//var rota_noticias = require('./app/routes/noticias')(app);

//# indicando a pporta para o servidor #/
app.listen(3000, function(){
	console.log("Servidor rodando com express"); // O express ja cria o servidor sendo necessário apenas indicar a porta e chamar uma função por parametro
}); 