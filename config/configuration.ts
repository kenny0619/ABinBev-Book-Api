export const configuration = () => ({
  appName: process.env.APP_NAME || "AirBinBev",
  apikey: process.env.API_KEY || "AirBinBev",
  serviceName: process.env.SERVICE_NAME || "Service",
  environment: process.env.NODE_ENV || "development",
  encryption_key: process.env.SERVER_SECRET || "AppSecret",
  jwt_expiration: process.env.JWT_EXPIRATION || 172800,
  port: process.env.PORT || 7000,
  pagination: {
    itemsPerPage: 10,
  },
  lang: "en",

  rabbitMQ: process.env.RABBIT_MQ_URL || "amqp://localhost:5672",
  mongodb: {
    url: process.env.DB_URL,
  },

  rdbms: {
    default: "postgres",
    postgres: {
      host: process.env.POSTGRES_DB_HOST,
      port: process.env.POSTGRES_DB_PORT,
      name: process.env.POSTGRES_DB_NAME,
      username: process.env.POSTGRES_DB_USERNAME,
      password: process.env.POSTGRES_DB_PASSWORD,
    },
  },
});
