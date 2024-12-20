const express = require('express');
const cors = require('cors');
const serverRoutes = require('./routes/serverRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 5050;

// Middleware setup
app.use(express.json());
app.use(cors());

// Routes registration
app.use('/api', serverRoutes);
app.use('/api', authRoutes);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
