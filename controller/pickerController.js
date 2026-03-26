const userModel = require('../model/user')
const cloudinary = require('../middleware/cloudinary')
const fs = require('fs');
// const { model } = require('mongoose');
const bcrypt = require('bcrypt')

exports.createUser= async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await userModel.create({
            name,
            email,
            phoneNumber,
            password: hashedPassword
        })
        res.status(201).json({
            message: 'User created successfully',
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        })
    }
}

exports.updateUser = async (req, res) => {
    try {

        const files = req.file;
        console.log(files)
        const filePath = files['path']

        const uploadToCloudinary = await cloudinary.uploader.upload(filePath);
        const extractSecureurl = {secureUrl:uploadToCloudinary.secure_url, publicId: uploadToCloudinary.public_id}
        console.log(`hello: `, extractSecureurl)
        fs.unlinkSync(filePath)


        const { id } = req.params

        const updatedUser = await userModel.findByIdAndUpdate(id, {
            profilePicture: extractSecureurl
        }, 
        { 
            new: true 
        })
        res.status(200).json({
            message: 'Profile updated successfully',
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        })  
    }
    
}