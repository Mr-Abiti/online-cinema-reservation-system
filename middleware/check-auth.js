const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //const token=req.Headers.Authorization;
        //console.log(token);
        const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
        req.userData = decoded;
        next();

    } catch (err) {
        return res.status(401).json({
            message: "authen faild",
            error: err
        });
    }
}