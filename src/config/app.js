module.exports.app = {
  stripe_sercrate_key: process.env.STRIPE_PAYMENT_SERCRATE_KEY,

  db_url: process.env.DB_URL,
  admin_collection: process.env.DB_ADMIN_COLLECTION,
  service_collection: process.env.DB_SERVICE_COLLECTION,
  review_collection: process.env.DB_REVIEW_COLLECTION,
  order_collection: process.env.DB_ORDER_COLLECTION,
  category_collection: process.env.DB_CATEGORY_COLLECTION,

  jwt_secrate: process.env.JWT_SECRATE_KEY,
};
