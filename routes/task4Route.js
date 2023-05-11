const express = require('express');
const router = express.Router();
const { zodiacs } = require('../data');

router.get('/', (req, res) => {
    res.locals.zodiacs = zodiacs;
    let name = req.query.name;
    if (name) {
        const filtered = zodiacs.filter(item => item.name === name);
        let zodiac = zodiacs[0];
        if (filtered) zodiac = filtered[0];
        res.locals.zodiac = zodiac;
        res.render('task4-details');
    }
    else res.render('task4');
});

module.exports = router;