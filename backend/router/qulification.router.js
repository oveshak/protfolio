import express from 'express';

import { isAuthenticated } from '../middelware/user.auth.js';
import { addAllEntriesData, addAllQualificationsData, deleteQualificationsData, getAllEntriesData, getAllQualificationsData, updateQualificationsData } from '../controller/qulification.controller.js';




const router =express.Router();


// Route for uploading the image

router.post('/add', isAuthenticated,addAllEntriesData)
router.get('/',getAllEntriesData
)

router.post('/qualification/add', isAuthenticated,addAllQualificationsData)

router.patch('/:id',isAuthenticated,updateQualificationsData)



router.get('/qualification',getAllQualificationsData)
router.delete('/qualification/:id', isAuthenticated,deleteQualificationsData)


// router.post ('/emailsend',emailsend)
// router.post ('/change-passwoed',changepasswd)



export default router