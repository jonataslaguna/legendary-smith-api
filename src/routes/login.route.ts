import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validateLogin';

const loginRoute = Router();

loginRoute.post('/login', validateLogin, loginController.executeLogin);

export default loginRoute;