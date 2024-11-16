const express = require('express');
const { signinController, signupController } = require('../Controllers/authController');

const authRouter = express.Router();

authRouter.post('/signin', signinController);
authRouter.post('/signup', signupController);

module.exports = {authRouter};