const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('home');
});

// About Me route
router.get('/about', (req, res) => {
    res.render('about');
});

// Projects route
router.get('/projects', (req, res) => {
    res.render('projects');
});

// Services route
router.get('/services', (req, res) => {
    res.render('services');
});

// Contact route
router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;

