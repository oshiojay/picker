const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    otp: {
      type: String,
      trim: true,
      default: () => {
        return Math.round(Math.random() * 1e4)
          .toString()
          .padStart(4, "0");
      },
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    profilePicture: {
        secureUrl: {
        type: String,
        trim: true
        },
        publicId: {
       type: String,
        trim: true
        }
    },
})
const userModel = mongoose.model('picker', userSchema)

module.exports = userModel;