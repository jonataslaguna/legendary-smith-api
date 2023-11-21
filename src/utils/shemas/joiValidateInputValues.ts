import Joi, { ValidationResult } from 'joi';
import { Product } from '../../types/Product';

const validateBodyCreateProduct = (body: Product): ValidationResult<Product> =>
  Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.string().min(3).required(),
    orderId: Joi.number().required(), 
  }).validate(body);

export default {
  validateBodyCreateProduct,
};