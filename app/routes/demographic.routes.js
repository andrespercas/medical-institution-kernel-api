module.exports = (app) => {
    const Demographic = require('../controllers/demographic.controller');

    // Crea una persona
    app.post('/demographic', Demographic.create);

    // Obtiene a todas las personas
    app.get('/demographic', Demographic.getAll);

    // Obtiene una persona por el idDemographic
    app.get('/demographic/:idDemographic', Demographic.getOneById);

    // Obtiene una persona por el nombre completo
    app.get('/demographic/:name/:lastname', Demographic.getOneByName);

    // Obtiene el atributo key de la persona con idDemographic
    app.get('/demographic/attributes/:idDemographic/:key', Demographic.getAttribute);

    // Actualiza los datos de una persona
    app.put('/demographic/:idDemographic', Demographic.update);
    
    // Borra una persona por el id
    app.delete('/demographic/:idDemographic', Demographic.delete);

}