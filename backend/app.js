const express = require('express');
const routes = require('./src/routes/routes.js');
const sequelize = require('./src/config/database.js');

const app = express();
const port = 3000;

// Testando a conexão com o banco de dados
sequelize.authenticate()
    .then(() => console.log('Connected to MySQL with Sequelize!'))
    .catch(err => console.error('Connection error:', err));

routes(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
