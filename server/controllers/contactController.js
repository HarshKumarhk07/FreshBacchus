const ContactMessage = require('../models/ContactMessage');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = await ContactMessage.create({ name, email, message });

        // Optional: Send email using nodemailer
        // For local development without actual SMTP credentials, we will just log it
        console.log(`New contact message from ${name} (${email}): ${message}`);

        res.status(201).json({ success: true, message: 'Message received successfully!', data: newMessage });
    } catch (error) {
        next(error);
    }
};
