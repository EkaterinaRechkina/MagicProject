const { Event, User } = require("../db/models");

const router = require("express").Router();

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

router.post("/", async (req, res) => {
  try {
    const { title, description, place, img, price, date, people } = req.body;
    const newElement = await Event.create({
      title: title,
      description: description,
      date: date,
      img: img,
      price: price,
      people: people,
      place: place,
    });

    return res.status(201).json(newElement);
  } catch (err) {
    console.log(err);
    return res.sendStatus(406);
  }
});

router.put("/:id", async (req, res) => {
const {id} = req.params
const { title, description, place, image, price, date, people } = req.body;
  const editedEvent = await Event.update({
    title,
    description,
    date,
    img: image,
    price,
    people,
    place
    },
    { where: { id } }
  );
  const currentEvent = await Event.findOne({ where: { id } });
  res.json(currentEvent);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteEvent = await Event.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;
