const Rating = require('../models/Rating');

class RatingController {
    static async listAllRatings(req, res) {
        try {
            const ratings = await Rating.findAll();
            res.status(200).json(ratings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createRating(req, res) {
        try {
            const { description, value } = req.body;
            const rating = await Rating.create({ description, value });
            res.status(201).json(rating);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = RatingController;
