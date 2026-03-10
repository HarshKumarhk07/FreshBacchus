const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const contactController = require('../controllers/contactController');

router.get('/testimonials', testimonialController.getTestimonials);
router.post('/testimonials/seed', testimonialController.seedTestimonials); // For easy setup
router.post('/contact', contactController.submitContact);

module.exports = router;
