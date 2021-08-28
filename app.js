const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

const indexRouter = require('./routes/index')

/* Carpeta public */
app.use(express.static(path.join(__dirname,'public')));

/* Rutas */
app.use('/', indexRouter);

/* Levantar el servidor */
app.listen(port, ()=> console.log('Servidor corriendo en http://localhost:' + port));