module.exports = (app) => {
    const provider = require('../controllers/provider.controller.js');

    // Create a new demographics
    app.post('/provider', provider.create);

    // Retrieve all demographics
    app.get('/provider', provider.findAll);/* 

    app.get('/demographics/:noteId', demographics.findOne);

    app.put('/demographics/:noteId', demographics.update);

    app.delete('/demographics/:noteId', demographics.delete); */
}