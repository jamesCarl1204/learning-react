const express = require('express');
const router = express.Router()
const {get_users, add_users} = require('../controllers/crudController')


router.get('/', get_users)
router.post('/', add_users)

module.exports = router
