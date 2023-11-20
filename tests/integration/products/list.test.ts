import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model'
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Should list all products', async function  () {
    
    const mockFindAllReturn = productMock.allProductsFromDB.map(productData => 
      ProductModel.build(productData)
    );

    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);
   
    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
  });
});
