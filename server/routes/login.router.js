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
                const message = 'User not found!'
                res.json({ message });
            }

            const isValidPass = await bcrypt.compare(password, user.password)

            if (!isValidPass) {
                const message = 'Wrong password!';
                res.json({ message });
            }

            req.session.userId = user.id;
            req.session.userName = user.name;
            const userInfo = [user.id, user.name, user.email.toLowerCase(), user.isAdmin];
            res.json({ userInfo })

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
