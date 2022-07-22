const router = require("express").Router();
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination(req, file, cb) {
//         pathFile = 'public/img/users';
//         cb(null, pathFile)
//     },
//     filename(req, file, cb) {
//         cb(null, file.originalname);
//     },
// })


// const upload = multer({ storage })

// router
//     .route('/new')
//     .post(upload.single('pic'), async (req, res) => {
//     console.log(req.file);

// })

module.exports = router;