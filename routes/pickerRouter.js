const router = require('express').Router();
const { createUser, updateUser } = require('../controller/pickerController');
const { upload } = require('../middleware/multer');

 router.post('/user', createUser);
 router.put('/update/:id', upload.single('profilePicture'), updateUser);


 module.exports = router