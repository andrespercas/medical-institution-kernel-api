module.exports = (app) => {
    const Medication = require('../controllers/medication.controller.js');

    app.post('/medication', Medication.create);

    app.get('/medication', Medication.findAll);

    app.get('/medication/:idMedication', Medication.findOne);

    app.put('/medication/:idMedication', Medication.update);

    app.delete('/medication/:idMedication', Medication.delete);
}