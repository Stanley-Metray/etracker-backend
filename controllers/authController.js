const jwt = require('jsonwebtoken');
const path = require("path");



module.exports.generateToken = async (user) => {
    const payload = {
        id: user.id,
        email: user.email
    }
    const token = jwt.sign(payload, process.env.JWT_SECRETE_KEY, { expiresIn: '24h' });
    return token;
}

module.exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw new Error("Access Prevented");
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                throw err;             }
            req.body.UserId = decoded.id;
            next();
        });
    } catch (error) {
        console.error(error);
        res.status(401).json({'success' : false}); 
    }
}



