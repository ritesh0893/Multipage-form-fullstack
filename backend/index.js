const express = require('express')
const app = express();
const User = require('./models/User')
const cors = require('cors');
require('dotenv').config()
const { mongoose } = require('mongoose');

mongoose.connect(process.env.MONGO_URL);
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}));

app.get('/test',(req,res)=>{
    res.json('hello there')
})

//Register Route
app.post('/register',async (req,res)=>{
    const {username,email,password,cpassword,design,fullname,Company,address,userprofile,listRadio,Budget,reference,formFile,timeline} = req.body;
    try {
        const userInfo = User.create({
            username,
            email,
            password,
            cpassword,
            design,
            fullname,
            Company,
            address,
            userprofile,
            listRadio,
            Budget,
            reference,
            formFile,
            timeline
        })
        res.json(userInfo)
    } catch (error) {
        
    }
})
app.listen(4000)