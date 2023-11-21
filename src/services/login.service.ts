import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/Login';
import { Token } from '../types/Token';
import { ServiceResponse } from '../types/serviceResponse/ServiceResponse';
import jwt from '../utils/jwt';

const executeLogin = async (login: Login): Promise<ServiceResponse<Token>> => {
  const foundUser = await UserModel.findOne({ where: { username: login.username } });
  
  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
      
  const { id, username } = foundUser.dataValues;
      
  const token = jwt.sign({ id, username });
     
  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  executeLogin,
};