const Testimonial = require('../models/Testimonial');

exports.getTestimonials = async (req, res, next) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json({ success: true, data: testimonials });
    } catch (error) {
        next(error);
    }
};

// Seed endpoint for testing
exports.seedTestimonials = async (req, res, next) => {
    try {
        await Testimonial.deleteMany();
        const dummy = [
            { name: "Sarah Jenkins", review: "The freshest produce I've ever bought! Highly recommend their organic vegetables.", rating: 5 },
            { name: "Michael T.", review: "Great service and fantastic quality fruits. The delivery was right on time.", rating: 4 },
            { name: "Emily R.", review: "Love the local grocery selection. The Bacchus Marsh community is lucky to have this.", rating: 5 }
        ];
        const inserted = await Testimonial.insertMany(dummy);
        res.status(201).json({ success: true, data: inserted });
    } catch (error) {
        next(error);
    }
};
