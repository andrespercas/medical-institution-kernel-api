module.exports = (app) => {
    const Provider = require('../controllers/provider.controller.js');

    app.post('/provider', Provider.create);

    app.get('/provider', Provider.findAll);

    app.get('/provider/:idProvider', Provider.findOne);

    app.put('/provider/:idProvider', Provider.update);

    app.delete('/provider/:idProvider', Provider.delete);
}