// Third party libraries
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env' });
require('./database/connection');

// Middlewares
const validateUserSession = require('./middlewares/validate-session');
const validateRequest = require('./middlewares/validate-request');

//Routes
const adminRouter = require('./routes/admin');
const studentRouter = require('./routes/student');
const teacherRouter = require('./routes/teacher');
const noticeBoardRouter = require('./routes/noticeBoard');
const testRouter = require('./routes/test');

//Common constants and util functions
const { corsOptions } = require('./common/constants');

app.use(cors(corsOptions));
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Custom middlewares
app.use(validateRequest);
app.use(validateUserSession);

//Routes
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);
app.use('/noticeBoard', noticeBoardRouter);
app.use('/test', testRouter);

app.listen(process.env.PORT || 3500, () => {
  console.log('Server Started');
});
