const express = require('express');
const routes = require('./src/routes/routes.js');



const app = express ();
//const cors = require('cors');
const port = 3000;

routes(app);


app.listen(port, ()=>{
    console.log(`Servidor Ativo na porta ${port}`)
})