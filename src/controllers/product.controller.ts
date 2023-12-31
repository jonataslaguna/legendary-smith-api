import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const listProducts = async (req: Request, res: Response) => {
  const { status, data } = await productService.listProducts();
  
  return res.status(mapStatusHTTP(status)).json(data);     
};

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;

  const { status, data } = await productService.createProduct(product);
  
  return res.status(mapStatusHTTP(status)).json(data);  
};

export default {
  createProduct,
  listProducts,
};