import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it("Should return an error if you don't send a username", async function () {
    
    const httpRequestBody = loginMock.withoutUserNameLoginBody

    
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);


    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it("Should return an error if you don't send a password", async function () {
  
  const httpRequestBody = loginMock.noPasswordLoginBody

  
  const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

  expect(httpResponse.status).to.equal(400);
  expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });

  });

  it('Should return an error if receiving a non-existent userName', async function () {
    
    const httpRequestBody = loginMock.notExistingUserBody
    sinon.stub(UserModel, 'findOne').resolves(undefined);

    
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);


    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it('Should return an error if receiving a non-existent password', async function () {
    
    const httpRequestBody = loginMock.existingUserWithWrongPasswordBody 
   
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);

    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/login')
      .send(httpRequestBody);


    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });
  
  it('When receiving an username and a valid password it should return a login token', async function () {
    
    const httpRequestBody = loginMock.validLoginBody
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);


    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });
});
