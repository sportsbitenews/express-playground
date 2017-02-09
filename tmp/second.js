/**
 * Created by omid on 2/9/17.
 */

const express = require('express')
const app = express()

app.use(function(request, response, next)  {
    console.log(request.headers)
next()
})

app.use(function (request, response, next)  {
    request.chance = Math.random()
next()
})

app.get('/middleWare', function (request, response) {
    response.json({
    chance: request.chance
})
})
//start listening
app.listen(3000)
