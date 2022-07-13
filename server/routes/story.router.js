const checkIsAutor= require('../middleware/checkAuthor')
const { Story, User } = require("../db/models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const allStories = await Story.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(allStories);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const userId = req.session.userId;
    
    const user = await User.findOne({
      where: { id: userId },
    });
    const user_id = user.id;
    const author =user.name;
    // console.log("userid", user_id);
    const { id, title, description, img } = req.body;

    const newElement = await Story.create({
      id,
      title,
      description,
      img,
      user_id,
      author
    });

    return res.status(201).json(newElement);
  } catch (err) {
    console.log(err);
    return res.sendStatus(406);
  }
});

router.put("/:id",checkIsAutor, async (req, res) => {
  const { id, title, description,img } = req.body;
  // console.log(id, title, description);

  const story = await Story.update(
    { title, description,img },
    { where: { id } }
  );
  const currentStory = await Story.findOne({ where: { id } });
  console.log(currentStory);
  res.json(currentStory);
});

router.delete("/:id",checkIsAutor, async (req, res) => {
  const { id } = req.params;

  const deleteStory = await Story.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;

