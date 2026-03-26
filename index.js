require('dotenv').config()
require('./config/database')
require('./model/user')
const express = require('express');

const PORT = process.env.PORT 
const router = require('./routes/pickerRouter')
const multer = require('multer')

const app = express();
app.use(express.json());
app.use(router)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
