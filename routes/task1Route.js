const express = require('express')
const { emotions } = require('../data');
const router = express.Router();

router.get('/', (request, response) => {
    let quotePath = 'images/task1/default.jpg';
    response.render('task1', { emotions, quotePath });
})

router.get('/:emotion', (request, response) => {
    const emotion = request.params.emotion;
    const selectedEmotion = emotions.filter(item => item.title == emotion);
    let quotePath = 'images/task1/default.jpg';
    if (selectedEmotion) quotePath = selectedEmotion[0].quotePath;
    response.render('task1', { emotions, quotePath });
})

module.exports = router;