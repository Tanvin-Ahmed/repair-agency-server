const {
  createOrder,
  findOrderListByEmail,
  findAllOrderList,
  updateOrderById,
} = require("./order.service");

const makeOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const order = await createOrder(newOrder);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const email = req.params.email;
    const orders = await findOrderListByEmail(email);

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await findAllOrderList();

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.body.value;
    const order = await updateOrderById(id, status);

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = { makeOrder, getUserOrders, getAllOrders, updateOrder };
