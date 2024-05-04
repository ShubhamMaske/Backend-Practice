const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, ()=> {
    console.log(`server listning on port ${port}`)
})