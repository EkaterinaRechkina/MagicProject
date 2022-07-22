const { Event, User } = require("../db/models");
const multer = require("multer");
const router = require("express").Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    pathFile = "public/img/pic";
    cb(null, pathFile);
  },

  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.array("pic"), async (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  const imgPath = `/img/pic/${req.files[0].filename}`;
  const { title, description, place, price, date, people } = obj;
  try {
    const newElement = await Event.create({
      title: title[0],
      description: description[0],
      date,
      img: imgPath,
      price: price[0],
      people: people[0],
      place,
    });

    return res.status(201).json(newElement);
  } catch (err) {
    console.log(err);
    return res.sendStatus(406);
  }
});

router.put("/:id", upload.array("pic"), async (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(">>>>>>>>", obj);
  const imgPath = `/img/pic/${req.files[0].filename}`;

  const { id } = req.params;
  const { title, description, date, place, price, people } = obj;
  const editedEvent = await Event.update(
    {
      title: title[0],
      description: description[0],
      date,
      img: imgPath,
      price: price[0],
      people: people[0],
      place,
    },
    { where: { id } }
  );
  const currentEvent = await Event.findOne({ where: { id } });

  res.json(currentEvent);
});

router.get("/", async (req, res) => {
  try {
    const allEvents = await Event.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json(allEvents);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteEvent = await Event.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;
