import { getOrderItems } from './itemData';
import { getSingleOrderCard } from './orderData';

// GET ORDER DETAILS
const viewOrderDetail = async (firebaseKey) => {
  const orderObject = await getSingleOrderCard(firebaseKey);
  const itemsObject = await getOrderItems(firebaseKey);
  return ({ itemsObject, ...orderObject });
};

export default viewOrderDetail;
