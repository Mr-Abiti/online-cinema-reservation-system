const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const Cinema = require('../models/cinemas');
const cinemaController = require('../controllers/cinemas');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', cinemaController.cinema_get_all);
router.get('/:id', cinemaController.cinema_get_by_id);
router.post('/', cinemaController.cinema_creat);
router.put('/:id', cinemaController.cinema_modify);
router.delete('/:id', cinemaController.cinema_delete);


module.exports = router;