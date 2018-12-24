const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const movieController = require('../controllers/movies');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', movieController.movie_get_all);
router.get('/:id', movieController.movie_get_by_id);
router.post('/', movieController.movie_creat);
router.put('/:id', movieController.movie_modify);
router.delete('/:id', movieController.movie_delete);

module.exports = router;