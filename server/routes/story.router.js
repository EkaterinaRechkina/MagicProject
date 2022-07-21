const checkIsAutor= require('../middleware/checkAuthor')
const { Story, User } = require("../db/models");

const multer = require('multer')

const router = require("express").Router();


const storage = multer.diskStorage({
  destination(req, file, cb) {
      pathFile = 'public/img/storypic';
      cb(null, pathFile)
  },
  
  filename(req, file, cb) {
   cb(null, file.originalname);
  },
})

const upload = multer({ storage })

router
    .route('/')
    .get( async (req, res) => {
      try {
        const allStories = await Story.findAll({
          order: [["createdAt", "DESC"]],
        });

        res.json(allStories );
      } catch (err) {
        console.log(err);
        res.status(400).end();
      }
    })
    .post(upload.array('storypic'), async (req, res) => {
      try {
        const userId = req.session.userId;

        const user = await User.findOne({
          where: { id: userId },
        });
        const user_id = user.id;
        const author = user.name;

        const obj = JSON.parse(JSON.stringify(req.body))
        const imgPath = `/img/storypic/${req.files[0].filename}`

        const {title, description} = obj;

        const newElement = await Story.create({
          title,
          description,
          img: imgPath,
          user_id,
          author
        });

    return res.status(201).json(newElement);
  } catch (err) {
    console.log(err);
    return res.sendStatus(406);
  }
});

router.put("/:id",checkIsAutor , upload.array('storypic'), async (req, res) => {
  const { id } = req.params;
  const obj = JSON.parse(JSON.stringify(req.body))
  const imgPath = `/img/storypic/${req.files[0].filename}`
  const { title, description } = obj;

  const story = await Story.update(
    { title, description,img: imgPath },
    { where: { id } }
  );
  const currentStory = await Story.findOne({ where: { id } });
  res.json(currentStory);
});

router.delete("/:id",checkIsAutor, async (req, res) => {
  const { id } = req.params;

  const deleteStory = await Story.destroy({ where: { id } });
  res.sendStatus(200);
});

module.exports = router;

