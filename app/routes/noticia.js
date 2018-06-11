//var dbConnection = require('../../config/dbConnection');
module.exports = function(app){


	app.get('/noticia', function(req, res){


		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result){
			res.render("noticias/noticia", {noticia : result});
   		});//A função query espera 2 parametros(sql e função de callback)

	});

};