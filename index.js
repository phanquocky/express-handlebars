const express = require('express')
const handlebars = require('express-handlebars')

const app = express()


app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}` )
})