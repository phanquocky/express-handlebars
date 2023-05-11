const express = require('express')
const handlebars = require('express-handlebars')
const { emotions } = require('./data');

const app = express()

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/html'));
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render('index');
});

app.use('/task1.htm', require('./routes/task1Route'));
app.use('/task2.htm', require('./routes/task2Route'));
app.use('/task3.htm', require('./routes/task3Route'));
app.use('/task4.htm', require('./routes/task4Route'));

app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}` )
});