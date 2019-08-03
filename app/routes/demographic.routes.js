module.exports = (app) => {
    const Demographic = require('../controllers/demographic.controller.js');

    
    app.post('/demographic', Demographic.create);

    app.get('/demographic', Demographic.findAll);

    app.get('/demographic/:idDemographic', Demographic.findOne);

    app.put('/demographic/:idDemographic', Demographic.update);

    app.delete('/demographic/:idDemographic', Demographic.delete);
}