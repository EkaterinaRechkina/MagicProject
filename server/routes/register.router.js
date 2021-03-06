const router = require("express").Router();
const bcrypt = require("bcrypt");
const mailer = require("../controllers/mailController");

const { User } = require("../db/models");

const saltRounds = 5;

router.route("/").post(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const checkUserEmail = await User.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });

    const checkUserName = await User.findOne({
      where: {
        name: name,
      },
    });

    if (checkUserEmail) {
      const message =
        "A user with this email address already exists. Login or register with a different email address.";
      res.json({ message });
    } else if (checkUserName) {
      const message =
        "A user with this username already exists. Login or register with another username.";
      res.json({ message });
    } else {
      const newUser = await User.create({
        name: name,
        email: email.toLowerCase(),
        password: hashedPassword,
        isAdmin: false,
      });

      req.session.userId = newUser.id;
      req.session.userName = newUser.name;

      const massage = {
        to: newUser.email,
        subject: "Регистрация почтового адреса",
        text: `
                    Поздравляем вы успешно зарегистрированы!
                    Ваш логин в личном кабинете : ${newUser.name}
                    Ваш пароль :  ${password}.
                    `,
      };
      mailer(massage);

      const userInfo = [newUser.id, newUser.name, newUser.email];
      res.json({ userInfo });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
