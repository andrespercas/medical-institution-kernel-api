module.exports = (app) => {
    const immunization = require('../controllers/immunization.controller.js');

    // Create a new demographics
    app.post('/immunization', immunization.create);

    // Retrieve all demographics
    app.get('/immunization', immunization.findAll);/* 

    app.get('/demographics/:noteId', demographics.findOne);

    app.put('/demographics/:noteId', demographics.update);

    app.delete('/demographics/:noteId', demographics.delete); */
}