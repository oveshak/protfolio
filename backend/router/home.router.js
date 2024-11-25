import express from 'express';

import { isAuthenticated } from '../middelware/user.auth.js';
import { upload } from '../middelware/imageUplode.js';
import { addHomeData, deleteHomeData, getHomeData, updateHomeData } from '../controller/home.controller.js';



const router =express.Router();


// Route for uploading the image

router.post('/add',upload.single("image"), isAuthenticated,addHomeData)
router.get('/',getHomeData)
router.patch('/update/:id',upload.single("images") ,isAuthenticated,updateHomeData)
router.delete('/:id',isAuthenticated,deleteHomeData)



// router.post ('/emailsend',emailsend)
// router.post ('/change-passwoed',changepasswd)



export default router