const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        const { name, password } = req.body;

        try {
            const user = await User.findOne({
                where:
                    {
                        name: name,
                    }
            })

            if (!user) {
                res.json('--- no user found ----');
            }

            const isValidPass = await bcrypt.compare(password, user.password)

            if (!isValidPass) {
                res.json('wrong password');
            }

            req.session.userId = user.id;
            req.session.userName = user.name;

            const id = user.id;
            const userName = user.name;

            res.json({ id, userName });

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
