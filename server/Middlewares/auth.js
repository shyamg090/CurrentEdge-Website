const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const jwt_check = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.json({
            mag: 'Youre not authorized to acess this!!'
        }
        )
    }
}

module.exports = { auth }