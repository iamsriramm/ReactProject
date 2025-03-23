const express=require('express')
const createmp1=require('../controllers/employeecontroller')
const GetData=require('../controllers/Login')
const route=express.Router()

route.post('/addemp',createmp1.createmp)
route.post('/login',GetData.HandleLogin)
module.exports= route
