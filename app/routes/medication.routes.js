module.exports = (app) => {
    const medication = require('../controllers/medication.controller.js');

    // Create a new demographics
    app.post('/medication', medication.create);

    // Retrieve all demographics
    app.get('/medication', medication.findAll);/* 

    app.get('/demographics/:noteId', demographics.findOne);

    app.put('/demographics/:noteId', demographics.update);

    app.delete('/demographics/:noteId', demographics.delete); */
}