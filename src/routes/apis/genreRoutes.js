const express = require('express');
const router = express.Router();
const { genresList } = require('../../controllers/apis/genreController');



router.get('/genres', genresList);
// router.get('/genres/detail/:id');

module.exports = router;