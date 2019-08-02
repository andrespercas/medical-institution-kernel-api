module.exports = (app) => {
    const allergy = require('../controllers/allergy.controller.js');

    // Create a new demographics
    app.post('/allergy', allergy.create);

    // Retrieve all demographics
    app.get('/allergy', allergy.findAll);/* 

    app.get('/demographics/:noteId', demographics.findOne);

    app.put('/demographics/:noteId', demographics.update);

    app.delete('/demographics/:noteId', demographics.delete); */
}