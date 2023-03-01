const mongoose  = require('mongoose')

mongoose.set('strictQuery', false);
const dbConfig = `mongodb+srv://dev:Johnwallas16@cluster0.fwkw8.mongodb.net/blocoDenotas?retryWrites=true&w=majority`

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
module.exports =  connection