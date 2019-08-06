module.exports = (app) => {
    const Allergy = require('../controllers/allergy.controller');
    
    app.post('/allergy', Allergy.create);

    app.get('/allergy', Allergy.getAll);
	
    app.get('/allergy/:idAllergy', Allergy.getOneById);
    
    app.put('/allergy/:idAllergy', Allergy.update);
	
    app.delete('/allergy/:idAllergy', Allergy.delete);
}