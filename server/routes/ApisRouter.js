const router = require("express").Router();
const axios = require("axios");

router.route("/future").get(async (req, res) => {
  try {
    const response = await axios.get(process.env.API_FUTURE_URL);
    res.json(response.data.fortune);
  } catch (error) {
    console.log(error);
  }
});

router.route("/tarot").get(async (req, res) => {
  try {
    const response = await axios.get(process.env.API_TAROT_URL);
    res.json(response.data.fortune);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
