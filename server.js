// const express = require('express');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const connectDB = require('./config/db');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api', userRoutes);
// app.use('/api', productRoutes);
// app.use('/api', orderRoutes);

// // Start Server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const port = 3000;

// ✅ CORS Middleware — place it BEFORE routes
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // optional
}));

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
