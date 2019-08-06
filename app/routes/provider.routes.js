module.exports = (app) => {
    const Provider = require('../controllers/provider.controller');
    
    app.post('/provider', Provider.create);
    
    app.get('/provider', Provider.getAll);
	
    app.get('/provider/:idProvider', Provider.getOneById);
    
    app.put('/provider/:idProvider', Provider.update);
	
    app.delete('/provider/:idProvider', Provider.delete);
}