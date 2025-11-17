import {Router} from 'express'
import petController from '../Controller/petController.js'

const router= Router();

router.get('/',petController.getPets)

router.get('/:id',petController.getPetById)

router.post('/addPet',petController.addPet)

router.put('/updatepet/:id',petController.updatePet)

router.delete('/deletePet/:id',petController.deletePet)

export default router;