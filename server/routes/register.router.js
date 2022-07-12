const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../db/models");

const saltRounds = 5;

router
    .route("/")
    .post(async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds)

            const newUser = await User.create({
                name: name,
                email: email,
                password: hashedPassword,
            })

            req.session.userId = newUser.id;
            req.session.userName = newUser.name;

            const id = newUser.id;
            const userName = newUser.name;
            res.json({ id, userName })

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
