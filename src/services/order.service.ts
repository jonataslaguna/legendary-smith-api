import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrdersWithProductIdsType } from '../types/Order';
import { ServiceResponse } from '../types/serviceResponse/ServiceResponse';

const listOrders = async ():Promise<ServiceResponse<OrdersWithProductIdsType[]>> => {
  const orders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });

  const ordersWithProductIds = orders.map(({ dataValues }) => ({
    ...dataValues,
    productIds: dataValues.productIds?.map((product) => product.id),
  }));

  return { status: 'SUCCESSFUL', data: ordersWithProductIds };
};

export default {
  listOrders,
};
