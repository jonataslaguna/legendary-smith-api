import { NextFunction, Request, Response } from 'express';
import joiValidateInputValues from '../utils/shemas/joiValidateInputValues';

const validateNewProduct = (req:Request, res: Response, next:NextFunction) => {
  const login = req.body;
  const { error } = joiValidateInputValues.validateBodyCreateProduct(login);
  let status: number;

  if (error) {
    status = error.message.includes('required') ? 400 : 422;
    
    return res.status(status).json({ message: `${error.message}` });
  }

  next();
};

export default validateNewProduct;
