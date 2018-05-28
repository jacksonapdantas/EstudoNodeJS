module.exports = function(app){

	app.get('/noticias', function(req, res){
		
		var mysql = require('mysql');//importando o mysql

		/#criando a conexão com mysql (estrutura Jason)#/
		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'teste',
			password : '1234',
			database : 'portal_noticias'
		});


		connection.query('select * from noticias',function(error, result){
			res.render("noticias/noticias", {noticias : result});
   		});//A função query espera 2 parametros(sql e função de callback)
	});
};