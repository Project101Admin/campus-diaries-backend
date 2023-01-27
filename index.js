require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

// Routes
const NoticeBoardRoutes = require('./routes/NoticeBoard');

app.use('/api', NoticeBoardRoutes);

app.listen(process.env.PORT || 3500, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
