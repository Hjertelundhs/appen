const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
let app = express()
const port = proccess.env.port || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

let Users = require('./routes/Users')

app.use('/users', Users)
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})