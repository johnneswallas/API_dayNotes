const express = require('express')
const app = express()
const cors = require("cors")
const port = process.env.PORT || 8081
require('./dataBase/dbConect')

app.use(cors())
app.use(express.json())


const AnnotetionController = require('./annotetion/AnnotetionController')
app.use("/anotacao", AnnotetionController)

app.get('/', (req, res)=>{
    res.json({teste:'Olá Mundo'})
})

app.listen(port, ()=>{
    console.log("o servidor esta rodadndo")
})