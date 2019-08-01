const express = require('express');
const bodyParser = require('body-parser');


// crea la aplicacion express
const app = express();
const port = process.env.PORT || 3000;

// se utiliza para parsear el contenido de las peticiones. parsea el contenido - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parsea el contenido application/json
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Conexion a la base de datos
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conexion exitosa a la base de datos");    
}).catch(err => {
    console.log('No se pudo conectar a la base de datos: ', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "API Kernel funcionando - medical institution"});
});

require('./app/routes/demographics.routes.js')(app);

// listen for requests
app.listen(port.port, () => {
    console.log("Server escuchando en el puerto 3000");
});