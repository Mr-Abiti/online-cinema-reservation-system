const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const controller = require('../controllers/users');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
const users = require('../models/users');

router.post('/signup', controller.users_signup);
router.post('/login', controller.user_login);
router.get('/', controller.user_get_all);
router.get('/:id', controller.user_get_by_id);
router.post('/', controller.user_create);
router.put('/:id', controller.user_modify);
router.delete('/:id', controller.user_delete);

module.exports = router;