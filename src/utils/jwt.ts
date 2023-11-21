import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  username: string,
};

function sign(payload: TokenPayload): string | undefined { 
  try {
    const token = jwt.sign(payload, secret);
    return token;
  } catch (error) {
    console.error('Error signing token:', error);
  }
}
  
function verify(token: string): TokenPayload | undefined {
  try {
    const data = jwt.verify(token, secret) as TokenPayload;
    return data;
  } catch (error) {
    console.error('Error verifying token:', error);
  }
}

export default {
  sign,
  verify,
};