require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://sjcoatings.onrender.com'],
  credentials: true
}));app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/enquiry', require('./routes/enquiry'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'SJ Coatings API running' }));

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sjcoatings';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    console.log('⚠️  Starting server without DB (enquiry saving disabled)');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  });



const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});