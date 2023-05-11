const express = require('express')
const { emotions } = require('../data');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('task2');
});

module.exports = router;