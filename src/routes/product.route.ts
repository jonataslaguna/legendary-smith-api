import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateNewProduct from '../middlewares/validateNewProduct';

const productRoute = Router();

productRoute.get('/products', productController.listProducts);

productRoute.post(
  '/products', 
  validateNewProduct, 
  productController.createProduct,
);

export default productRoute;