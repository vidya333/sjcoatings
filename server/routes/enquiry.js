const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// Submit enquiry
router.post('/', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ success: true, message: 'Enquiry submitted successfully! We will contact you within 24 hours.' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Get all enquiries (admin)
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get stats
router.get('/stats', async (req, res) => {
  try {
    const total = await Enquiry.countDocuments();
    res.json({ success: true, data: { totalEnquiries: total } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
