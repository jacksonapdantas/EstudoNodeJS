module.exports = function(app){
	app.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	app.post('/noticias/salvar', function(req, res){
		var  noticias = req.body;
		res.send(noticias);

		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(erro, result){
			res.render("noticias/noticias", {noticias : result});
		})
	});



};