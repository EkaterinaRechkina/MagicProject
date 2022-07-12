const router = require("express").Router();

router
    .route("/")
    .post((req, res) => {
        req.session.destroy();
        res.clearCookie(process.env.COOKIE_NAME);
        res.end();
    });

module.exports = router;
