const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const userController = require('../controllers/users');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
const users = require('../models/users');

router.post('/signup', userController.users_signup);
router.post('/login', userController.user_login);
router.get('/', userController.user_get_all);
router.get('/:id', userController.user_get_by_id);
router.post('/', userController.user_create);
router.put('/:id', userController.user_modify);
router.delete('/:id', userController.user_delete);

module.exports = router;