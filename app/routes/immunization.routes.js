module.exports = (app) => {
    const Immunization = require('../controllers/immunization.controller');

    app.post('/immunization', Immunization.create);

    app.get('/immunization', Immunization.getAll);

    app.get('/immunization/:idImmunization', Immunization.getOneById);

    app.put('/immunization/:idImmunization', Immunization.update);

    app.delete('/immunization/:idImmunization', Immunization.delete);
}