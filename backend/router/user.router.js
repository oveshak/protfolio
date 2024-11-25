import express from 'express';

import { loginUser, loginUserProfile, logout, registerUser } from '../controller/user.controller.js';
import { isAuthenticated } from '../middelware/user.auth.js';




const router =express.Router();


// Route for uploading the image

router.post('/signup', registerUser)
router.post('/login', loginUser)
router.post('/logout', logout)
router.get('/me',isAuthenticated,loginUserProfile)



// router.post ('/emailsend',emailsend)
// router.post ('/change-passwoed',changepasswd)



export default router