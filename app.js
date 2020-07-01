const express = require('express')
const port = 3002
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/routes');

routes(app)
app.get('/', (req, res) => {
    console.log(`URL: ${req.url}`)
   res.response.send({message: 'Node.js and Express REST API'});
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const server = app.listen(port, (error) => {
    if(error) return console.log(`Error ${error}`)
    console.log(`Server listening on port ${server.address().port}`)
})