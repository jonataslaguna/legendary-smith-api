const validPassword = 'ch4ng3m3';

const withoutUserNameLoginBody = { 
  username: '',
  password: validPassword 
};

const validUser = 'user';

const noPasswordLoginBody = { 
  username: validUser, 
  password: '' 
};

const notExistingUserBody = { 
  username: 'notFound',
  password: validPassword 
};

const existingUserWithWrongPasswordBody = { 
  id: 1, 
  username: validUser, 
  vocation: 'Guerreiro',
  level: 10,
  password: 'wrongPassword' 
};

const hashedPassword = '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW';

const existingUser = { 
  id: 1, 
  username: validUser,
  vocation: 'Guerreiro',
  level: 10,
  password: hashedPassword,
};

const validLoginBody = { 
  username: validUser,
  password: validPassword 
};

export default {
  withoutUserNameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody
};