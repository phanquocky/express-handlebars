const express = require('express');
const router = express.Router();
const { categories, products } = require('../data');

router.get('/', (req, res) => {
    res.locals.categories = categories;
    res.locals.products = products;
    let category = req.query.category;
    if (category)
        res.locals.products = products.filter(item => item.category == category);
    res.render('task3');
});

module.exports = router;