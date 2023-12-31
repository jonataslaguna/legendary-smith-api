import 
ProductModel, { 
  ProductInputtableTypes, 
  ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/serviceResponse/ServiceResponse';

const listProducts = async ():Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

const createProduct = async (
  { name, price, orderId }: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> => {
  const productAdded = await ProductModel.create({ name, price, orderId });
      
  const { orderId: omittedOrderId, ...newProduct } = productAdded.get({ plain: true });
      
  return { status: 'CREATED', data: newProduct };
};

export default {
  createProduct,
  listProducts,
};