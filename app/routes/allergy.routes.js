module.exports = (app) => {
    const Allergy = require('../controllers/allergy.controller.js');

    app.post('/allergy', Allergy.create);

    app.get('/allergy', Allergy.findAll);

    app.get('/allergy/:idAllergy', Allergy.findOne);

    app.put('/allergy/:idAllergy', Allergy.update);

    app.delete('/allergy/:idAllergy', Allergy.delete);
}