const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiConfig = require("./config/api.config");
const dbConfig = require('./config/database.config');

// crea la aplicacion express
const app = express();
const port = process.env.PORT || apiConfig.port;

// se utiliza para parsear el contenido de las peticiones. parsea el contenido - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parsea el contenido application/json
app.use(bodyParser.json())


mongoose.Promise = global.Promise;

// Conexion a la base de datos
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...: ', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "API Kernel ready"});
});

require('./app/routes/allergy.routes')(app);
require('./app/routes/demographic.routes')(app);
require('./app/routes/immunization.routes')(app);
require('./app/routes/medication.routes')(app);
require('./app/routes/provider.routes')(app);

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});