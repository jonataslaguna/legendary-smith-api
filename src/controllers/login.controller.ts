import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const executeLogin = async (req:Request, res: Response) => {
  const login = req.body;

  const { status, data } = await loginService.executeLogin(login);
  
  return res.status(mapStatusHTTP(status)).json(data); 
};

export default {
  executeLogin,
};