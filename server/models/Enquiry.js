const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  service: { type: String, required: true },
  projectLocation: { type: String },
  surfaceArea: { type: String },
  message: { type: String, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'contacted', 'closed'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enquiry', enquirySchema);
