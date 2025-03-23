const express=require('express')
const dotEnv=require('dotenv')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const signup=require('./routes/EmployeeRoutes')
const port=5000
dotEnv.config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('connected')
})
.catch((error)=>{
console.log('error',error)
})

app.use('/signup',signup)
app.use('/verify',signup)

app.listen(port,()=>{
    console.log("server running")
})