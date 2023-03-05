const express = require('express');
const app = express();
const config = require('./config.js');
const port = config.PORT_APP
// Importar modelos
const {Brand,Model} = require('./models/models');

// Importar routers
const brandRouter = require('./routers/brand.router');
const modelRouter = require('./routers/model.router');

// Configurar middlewares
app.use(express.json());

// Conectar routers
app.use('/brands', brandRouter);
app.use('/models', modelRouter);

// Configurar base de datos y sincronizar modelos
const sequelize = require('./bd');

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Base de datos conectada y modelos sincronizados.');
  })
  .catch((error) => {
    console.log('Error al conectar y sincronizar modelos:', error);
  });

// Iniciar servidor
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app;
