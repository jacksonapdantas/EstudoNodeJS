var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

var connection = dbConnection();

	app.get('/noticias', function(req, res){
		
		connection.query('select * from noticias',function(error, result){
			res.render("noticias/noticias", {noticias : result});
   		});//A função query espera 2 parametros(sql e função de callback)
	});
};