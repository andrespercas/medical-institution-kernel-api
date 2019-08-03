module.exports = (app) => {
    const Immunization = require('../controllers/immunization.controller.js');

    app.post('/immunization', Immunization.create);

    app.get('/immunization', Immunization.findAll);

    app.get('/immunization/:idImmunization', Immunization.findOne);

    app.put('/immunization/:idImmunization', Immunization.update);

    app.delete('/immunization/:idImmunization', Immunization.delete);
}