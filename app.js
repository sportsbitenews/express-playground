/**
 * Created by omid on 2/8/17.
 */

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('<h1>Hello bisadhaaa booos World!</h1>')
})
app.get('/a', function (req, res) {
    res.send('<h1>Hello aaaaaaaaaaah World!</h1>')
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
