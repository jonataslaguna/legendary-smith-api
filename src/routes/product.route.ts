import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRoute = Router();

productRoute.get('/products', productController.listProducts);

productRoute.post('/products', productController.createProduct);

export default productRoute;