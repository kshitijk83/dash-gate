const express = require('express');

const studentController = require('../controller/student');

const router = express.Router();

router.post('/create', studentController.postCreate);
router.get('/all', studentController.allStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;