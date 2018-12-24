const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const controller = require('../controllers/movies');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', controller.movie_get_all);
router.get('/:id', controller.movie_get_by_id);
router.post('/', controller.movie_creat);
router.put('/:id', controller.movie_modify);
router.delete('/:id', controller.movie_delete);

module.exports = router;