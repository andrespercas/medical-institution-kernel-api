module.exports = (app) => {
    const demographic = require('../controllers/demographic.controller.js');

    // Create a new demographics
    app.post('/demographic', demographic.create);

    // Retrieve all demographics
    app.get('/demographic', demographic.findAll);/* 

    app.get('/demographics/:noteId', demographics.findOne);

    app.put('/demographics/:noteId', demographics.update);

    app.delete('/demographics/:noteId', demographics.delete); */
}