const express = require('express');
const RatingController = require('../controllers/RatingController');
const UserController = require('../controllers/UserController');

const routes = (app) => {
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    // Routes for Ratings
    app.get('/ratings', RatingController.listAllRatings); // List all ratings
    app.post('/ratings', RatingController.createRating); // Create a new rating

    // Routes for Users
    app.get('/users', UserController.listAllUsers); // List all users
    app.post('/users', UserController.createUser); // Create a new user
};

module.exports = routes;
