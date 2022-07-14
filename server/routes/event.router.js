const checkIsAutor= require('../middleware/checkAuthor')
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
  console.log(req.body);
  try {
    const {title,
        description,
        place,
        img,
        price,
        date,
        people} = req.body;

    const newElement = await Event.create({
        title,
        description,
        place,
        img,
        price,
        date,
        people
    });

    return res.status(201).json(newElement);
  } catch (err) {
    console.log(err);
    return res.sendStatus(406);
  }
});

// router.put("/:id",checkIsAutor, async (req, res) => {
//   const { id, title, description,img } = req.body;
//   // console.log(id, title, description);

//   const story = await Story.update(
//     { title, description,img },
//     { where: { id } }
//   );
//   const currentStory = await Story.findOne({ where: { id } });
//   console.log(currentStory);
//   res.json(currentStory);
// });

// router.delete("/:id",checkIsAutor, async (req, res) => {
//   const { id } = req.params;

//   const deleteStory = await Story.destroy({ where: { id } });
//   res.sendStatus(200);
// });

module.exports = router;
