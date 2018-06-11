var express = require('express'); // require importa algo para o seu script (nesse caso a biblioteca do express)
var consign = require('consign'); //importando o consign
var bodyParser = require('body-Parser');

var app = express(); //express apenas retorna a função, então é necessário ter o retorno dela
app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
	.include('/app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);



module.exports = app;