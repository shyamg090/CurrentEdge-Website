const express = require('express');
const { savednewsController } = require('../Controllers/newsController');
const { auth } = require('../Middlewares/auth');

const userRouter = express.Router();

userRouter.get('/profile', auth , savednewsController);

module.exports = {userRouter};