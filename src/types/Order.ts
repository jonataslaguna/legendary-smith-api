export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrdersWithProductIdsType = {
  id:number;
  userId: number;
  productIds?: Array<number>;
};
