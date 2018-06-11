//var dbConnection = require('../../config/dbConnection');
module.exports = function(){

	this.getNoticias =  function(connection, callback){
		connection.query('select * from noticias', callback);
	}

	return this;

};