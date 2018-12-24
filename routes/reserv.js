const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const controller = require('../controllers/reserv');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get('/', controller.get_all_reserved);
router.get('/:id', controller.get_reserved_by_id);
router.post('/', controller.reserv);
router.put('/:id', controller.modify_reserv);
router.delete('/:id', controller.delete_reserv);

module.exports = router; 