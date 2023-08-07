export const configuration = () => ({
  appName: process.env.APP_NAME || "AirBinBev",
  apikey: process.env.API_KEY || "AirBinBev",
  serviceName: process.env.SERVICE_NAME || "Service",
  environment: process.env.NODE_ENV || "development",
  encryption_key: process.env.SERVER_SECRET || "AppSecret",
  port: process.env.PORT || 4000,
  pagination: {
    itemsPerPage: 10,
  },
  lang: "en",

  rabbitMQ:
    process.env.RABBIT_MQ_URL ||
    "amqps://devmq:CloudAdmin_123@b-83994ec2-85bd-4e15-815e-cd2310e6fed2.mq.eu-north-1.amazonaws.com:5671",
  mongodb: {
    url:
      process.env.DB_URL ||
      "mongodb+srv://devprod:CloudAdmin_123@devstg.on5p0hj.mongodb.net/gns-stg?retryWrites=true&w=majority",
  },

  rdbms: {
    default: "postgres",
    postgres: {
      host: process.env.POSTGRES_DB_HOST || "batyr.db.elephantsql.com",
      port: process.env.POSTGRES_DB_PORT || 5432,
      name: process.env.POSTGRES_DB_NAME || "drwchfre",
      username: process.env.POSTGRES_DB_USERNAME || "drwchfre",
      password:
        process.env.POSTGRES_DB_PASSWORD || "DxXakdYiLVejNHtVguH2CEI6U39yw1Io",
    },
  },
});
