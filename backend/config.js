import dotenv from "dotenv";

dotenv.config();

const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51QcX6kECbgbmkR5tJLgZ3ogh8BFo1cePgHQBpIWMKRiprvOMSej0A5Il8QvC0EqRTiiDQilTu2Oa4qcrXWvkS8Yq00cRaslSBO";

export default{
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD,
    STRIPE_SECRET_KEY,
};