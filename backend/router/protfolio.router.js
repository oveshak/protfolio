import express from 'express';

import { isAuthenticated } from '../middelware/user.auth.js';
import { upload } from '../middelware/imageUplode.js';
import { addProtfolio, deleteProtfolio, getProtfolio, updatePortfolio } from '../controller/protfolio.controller.js';



const router =express.Router();


// Route for uploading the image

router.post('/add',upload.single("image"), isAuthenticated,addProtfolio)
router.get('/',getProtfolio)
router.patch('/update/:id',upload.single("image") ,isAuthenticated,updatePortfolio)
router.delete('/:id',isAuthenticated,deleteProtfolio)



// router.post ('/emailsend',emailsend)
// router.post ('/change-passwoed',changepasswd)



export default router