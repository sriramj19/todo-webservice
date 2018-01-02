var OutletController = require('./OutletController');


module.exports = function(app){

    app.get('/', function(req, res) {
      console.log('into');
      // OutletController.test(req, res);
    });

}
