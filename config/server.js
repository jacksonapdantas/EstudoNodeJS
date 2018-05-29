var express = require('express'); // require importa algo para o seu script (nesse caso a biblioteca do express)
var consign = require('consign'); //importando o consign

var app = express(); //express apenas retorna a função, então é necessário ter o retorno dela
app.set('view engine', 'ejs');
app.set('views','./app/views');

consign().include('/app/routes').into(app);

module.exports = app;