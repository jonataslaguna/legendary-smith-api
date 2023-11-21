import { Router } from 'express';
import orderController from '../controllers/order.controller';

const orderRoute = Router();

orderRoute.get('/orders', orderController.listOrders);

export default orderRoute;