import { Router } from "express";
import productController from '../Controller/productController.js'

const router= Router();

router.get('/',productController.getAllProducts);

router.get('/:id',productController.getProductById);

router.post('/add',productController.addProduct);

router.put('/update/:id',productController.updateProduct);

router.delete('/delete/:id',productController.deleteProduct);


export default router;
