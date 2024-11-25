import express from 'express';

import { isAuthenticated } from '../middelware/user.auth.js';
import { upload } from '../middelware/imageUplode.js';
import { addAboutData, deleteAboutData, getAboutData, updateAboutData } from '../controller/about.controller.js';



const router =express.Router();


// Route for uploading the image

router.post('/add',upload.single("image"), isAuthenticated, addAboutData);
router.get('/',getAboutData)
router.patch('/update/:id',upload.single("image"),isAuthenticated,updateAboutData)
router.delete('/:id',isAuthenticated,deleteAboutData)



// router.post ('/emailsend',emailsend)
// router.post ('/change-passwoed',changepasswd)



export default router