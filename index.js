const express  = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
const {mogoUrl} = require('./keys')


require('./models/User');
require('./models/post');



const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
const post = require('./routes/post')

app.use(bodyParser.json())
app.use(authRoutes)
app.use(post)
app.use(express.json())

mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err)
})



app.get('/',requireToken,(req,res)=>{
    res.send("hello user")
})



app.listen(PORT,()=>{
    console.log("server running "+PORT)
})