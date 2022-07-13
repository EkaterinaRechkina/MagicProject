const router = require("express").Router();

const { User } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        try {
            if (res.locals.userId) {
                const user = await User.findOne({
                    where:
                        {
                            id: res.locals.userId,
                        }
                })

                const userInfo = [user.id, user.name, user.email];
                res.json({ userInfo })
            } else {
                res.json(false);
            }
        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
