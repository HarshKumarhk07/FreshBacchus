const Testimonial = require('../models/Testimonial');

exports.getTestimonials = async (req, res, next) => {
    try {
        const testimonials = await Testimonial.find().timeout(2000);
        res.status(200).json({ success: true, data: testimonials.length > 0 ? testimonials : getFallbackData() });
    } catch (error) {
        console.error("Testimonial Fetch Error, using fallback:", error.message);
        res.status(200).json({ success: true, data: getFallbackData() });
    }
};

function getFallbackData() {
    return [
        { _id: '1', name: "Sarah Jenkins", review: "The freshest produce I've ever bought! Highly recommend their organic vegetables.", rating: 5 },
        { _id: '2', name: "Michael T.", review: "Great service and fantastic quality fruits. The delivery was right on time.", rating: 4 },
        { _id: '3', name: "Emily R.", review: "Love the local grocery selection. The Bacchus Marsh community is lucky to have this.", rating: 5 }
    ];
}

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
