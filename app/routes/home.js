module.exports = function(app){
	//utilizando o ejs para html dinamico
	app.get('/', function(req, res){
		res.render("home/index");
	});
};