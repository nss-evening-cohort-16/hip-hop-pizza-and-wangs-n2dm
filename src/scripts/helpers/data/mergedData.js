import { deleteItem, getOrderItems } from './itemData';
import { getSingleOrderCard } from './orderData';

// GET ORDER DETAILS
const viewOrderDetail = async (firebaseKey) => {
  const orderObject = await getSingleOrderCard(firebaseKey);
  const itemsObject = await getOrderItems(firebaseKey);
  return ({ itemsObject, ...orderObject });
};

// DELETE ORDER ITEMS
const deleteOrderItem = (orderId) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((orderItemsArray) => {
    const deleteItems = orderItemsArray.map((item) => deleteItem(item.firebaseKey));

    console.warn(deleteItem);

    Promise.all([...deleteItems]).then(() => resolve(deleteSingleOrder))
  })
});

export default viewOrderDetail;
