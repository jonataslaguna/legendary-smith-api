import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ordersMock from '../../mocks/orders.mock';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Should list all orders', async function  () {
    
    const mockFindAllReturn =  OrderModel.build(ordersMock.allOrdersFromDB);

    sinon.stub(OrderModel, 'findAll').resolves([mockFindAllReturn]);
   
    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.equal(200);
  });
});
