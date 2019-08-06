module.exports = (app) => {
    const Medication = require('../controllers/medication.controller');
    
    app.post('/medication', Medication.create);
    
    app.get('/medication', Medication.getAll);
	
    app.get('/medication/:idMedication', Medication.getOneById);
   
    app.put('/medication/:idMedication', Medication.update);

    app.delete('/medication/:idMedication', Medication.delete);
}