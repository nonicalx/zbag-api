const jwt = require('jsonwebtoken');

function auth(req, res, next) {

    const token = req.headers["x-access-token"] || req.headers["authorization"];

    if (!token) {
        return res.status(401).send({ message: 'Access denied. No token provided.', status: 401 });
    }


    try {
        const secret = "RickyAndMorty"
        const decodedToken = jwt.verify(token, secret);
        req.user = decodedToken;
        next();
    } catch (e) {
        res.status(400).send({ message: "Invalid token.", status: 400 });
    }
}

module.exports = auth;