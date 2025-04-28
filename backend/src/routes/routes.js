const express = require('express');

const routes = (app) =>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))  
   

    app.get('/', (req, res) => {
        return res.send('Hello World');
    }); 

}

module.exports = routes;