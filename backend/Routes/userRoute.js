import {Router} from 'express';
import path from 'path';
import multer from 'multer'
import userController from '../Controller/userController.js'


const storage= multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null, 'uploads/')
    },

    filename: (req,file,cb)=>{
        cb(null, file.fieldname+ '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload= multer({storage: storage})
const router= Router();

router.get('/',userController.getAllUsers);

router.get('/:id',userController.getUserById);

router.post('/login',userController.loginUser);

router.post('/signup',upload.single('profilePicture'),userController.signupUser);

router.put('/update/:id',userController.updateUser);

router.delete('/delete/:id',userController.removeUser);


export default router;