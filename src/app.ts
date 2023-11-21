import express from 'express';
import productRoute from './routes/product.route';
import orderRoute from './routes/order.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());

app.use(loginRoute);

app.use(productRoute);

app.use(orderRoute);

export default app;
