const express = require('express');
const router = express.Router()
const {get_users, add_users, deleteUser} = require('../controllers/crudController')


router.get('/', get_users)
router.post('/', add_users)
router.delete('/:id', deleteUser)
module.exports = router
