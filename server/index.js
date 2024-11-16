const express = require('express');
const { authRouter } = require('./Routes/authRoutes');
const { userRouter } = require('./Routes/userRoutes');
const { User } = require('./Models/userModel');

const app = express();
User();
app.use(express.json());

app.use('/api/user', authRouter);

app.use('/users', userRouter);

app.listen(4000, ()=>{
    console.log('server has started');
})
