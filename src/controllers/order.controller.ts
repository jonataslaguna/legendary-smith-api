import { Request, Response } from 'express';
import orderService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const listOrders = async (_req: Request, res: Response) => {
  const { status, data } = await orderService.listOrders();
  
  return res.status(mapStatusHTTP(status)).json(data);  
};

export default {
  listOrders,
};