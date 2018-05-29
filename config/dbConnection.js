var mysql = require('mysql');//importando o mysql

var connMySQL = function(){
	//criando a conexão com mysql (estrutura Jason)
	return mysql.createConnection({
		host : 'localhost',
		user : 'teste',
		password : '1234',
		database : 'portal_noticias'
	});
}

module.exports = function(){
	return connMySQL;
}

