import * as dotenv from 'dotenv';
dotenv.config();

export default {
  APP: process.env.APP || 'development',
  PORT: process.env.PORT || '3000',

  DB_DIALECT: process.env.DB_DIALECT || 'mongo',
  DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017/example_db',
  DB_NAME: process.env.DB_NAME || 'example_db',
  DB_PASSWORD: process.env.DB_PASSWORD || '1234',
  DB_PORT: process.env.DB_PORT || '27017',
  DB_USER: process.env.DB_USER || 'root',

  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'toremi',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  PRICE_UPDATE_TIME: process.env.PRICE_UPDATE_TIME || '10000', 
  PRIVATE_KEY: process.env.PRIVATE_KEY || "12659de72ff4a76b643720617ee99cfd150cb8561240e64bdf4079bdd60a98c2"
};
