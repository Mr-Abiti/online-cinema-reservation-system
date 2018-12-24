const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const Cinema = require('../models/cinemas');
const controller = require('../controllers/cinemas');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', controller.cinema_get_all);
router.get('/:id', controller.cinema_get_by_id);
router.post('/', controller.cinema_creat);
router.put('/:id', controller.cinema_modify);
router.delete('/:id', controller.cinema_delete);


module.exports = router;