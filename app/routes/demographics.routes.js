module.exports = (app) => {
    const demographics = require('../controllers/demographics.controller.js');

    // Create a new demographics
    app.post('/demographics', demographics.create);

    // Retrieve all demographics
    app.get('/demographics', demographics.findAll);/* 

    app.get('/demographics/:noteId', demographics.findOne);

    app.put('/demographics/:noteId', demographics.update);

    app.delete('/demographics/:noteId', demographics.delete); */
}