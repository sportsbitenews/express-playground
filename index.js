/**
 * Created by omid on 2/8/17.
 */

const express = require('express')
const path = require('path')
const hbrs = require('express-handlebars')

const app = express()

app.engine('.hbs', hbrs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

// Routing
app.get('/', function (request, response) {
    response.render('home',{
        title:'template engine',
        name:'Omid'
    })
})

app.get('/next', function (request, response) {
    response.render('next',{
        where:'Here you are landed on the next page',
        title: "second page"
    })
})

//Strt listening port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
