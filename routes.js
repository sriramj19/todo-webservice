var OutletController = require('./OutletController');


module.exports = function(app){

    app.get('/', function(req, res) {
      OutletController.test(req, res);
    });

}
