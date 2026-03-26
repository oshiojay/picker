const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://oshiobughieailakhu_db_user:iOiIuik5YZSHgvOn@cluster0.vajd8jb.mongodb.net/').then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err)
})