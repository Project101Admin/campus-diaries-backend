require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

connectDB();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const NoticeBoardRoutes = require('./routes/NoticeBoard');
const NoticeBoardRoutes2 = require('./routes/noticeBoard2');

app.use('/api', NoticeBoardRoutes);
app.use('/api/noticeBoard', NoticeBoardRoutes2);

app.listen(process.env.PORT || 3500, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
