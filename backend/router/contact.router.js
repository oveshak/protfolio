import express from 'express';

import { isAuthenticated } from '../middelware/user.auth.js';
import { addContactData, deleteContactData, deleteContactMessage, getContactData, getContactMessages, postContactMessage } from '../controller/contact.controller.js';




const router =express.Router();


// Route for uploading the image

router.post('/add', isAuthenticated,addContactData)
router.get('/',getContactData)
router.delete('/:id',isAuthenticated,deleteContactData)


router.post('/add/contact-message',postContactMessage)
router.get('/all-contact-message', isAuthenticated,getContactMessages)
router.delete('/contact-message/:id', isAuthenticated,isAuthenticated,deleteContactMessage)


// router.post ('/emailsend',emailsend)
// router.post ('/change-passwoed',changepasswd)



export default router