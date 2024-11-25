import express from 'express';

import { isAuthenticated } from '../middelware/user.auth.js';
import { addSkillsData, deleteSkillsData, getSkillsData } from '../controller/skills.controller.js';



const router =express.Router();


// Route for uploading the image

router.post('/add', isAuthenticated,addSkillsData)
router.get('/',getSkillsData)
router.delete('/:id',isAuthenticated,deleteSkillsData)



// router.post ('/emailsend',emailsend)
// router.post ('/change-passwoed',changepasswd)



export default router