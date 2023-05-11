const express = require('express')
const router = express.Router();

const JARS_PERCENT = {
    necessity: 0.55,
    financialFreedom: 0.1,
    give: 0.05,
    education: 0.1,
    longterm: 0.1,
    play: 0.1
};

router.get('/', (request, response) => {
    const salary = request.query.salary;
    let jarsMoney = {...JARS_PERCENT};
    for (let property in jarsMoney) {
        const money = jarsMoney[property] * salary;
        jarsMoney[property] = money.toFixed(2);
    }
    response.locals.jars = jarsMoney;
    response.render('task2');
});

module.exports = router;