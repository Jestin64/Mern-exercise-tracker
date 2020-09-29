const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


// const uri = process.env.ATLAS_URI;
mongoose.connect( 'mongodb+srv://AaronBaron:AaronBaron@cluster0.syfka.gcp.mongodb.net/cluster0?retryWrites=true&w=majority',
 { useUnifiedTopology:true , useCreateIndex:true, useNewUrlParser:true })
 .catch(err => console.log(err))
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("MongoDB connection established successfully")
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

