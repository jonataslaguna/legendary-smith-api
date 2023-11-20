import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Should register a product successfully', async function  () {
    const httpRequestBody = productMock.productValid

    const mockCreatedReturn = ProductModel.build(productMock.createProductFromDB);

    sinon.stub(ProductModel, 'create').resolves(mockCreatedReturn);

   
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal({
      id: 6,
      name: "Martelo de Thor",
      price: "30 peças de ouro"
    });
  });
});
