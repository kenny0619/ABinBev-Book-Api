export const configuration = () => ({
  appName: process.env.APP_NAME || "geenus",
  apikey: process.env.API_KEY || "geenusKey",
  serviceName: process.env.SERVICE_NAME || "Service",
  environment: process.env.NODE_ENV || "development",
  encryption_key: process.env.SERVER_SECRET || "AppSecret",
  jwt_expiration: process.env.JWT_EXPIRATION || 172800,
  port: process.env.PORT || 7000,
  pagination: {
    itemsPerPage: 10,
  },
  lang: "en",
  fromEmail: process.env.EMAIL_NO_REPLY,
  defaultVerifyCode: "1234",
  rabbitMQ: process.env.RABBIT_MQ_URL || "amqp://localhost:5672",
  mongodb: {
    url: process.env.DB_URL,
  },
  templates: {
    email: {
      verify: "verify",
      passwordReset: "password-reset",
      otp: "otp",
    },
    sms: {
      verify: "verify",
    },
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
  social: {
    facebook: {
      GraphUrl:
        "https://graph.facebook.com/v2.12/me?fields=email,first_name,last_name,picture",
      apiKey: process.env.FACEBOOK_CLIENT_ID,
      testAccessToken: process.env.FB_ACCESS_TOKEN,
      testEmail: process.env.FB_TEST_EMAIL,
      testSocialId: process.env.FB_TEST_ID,
    },
    google: {
      url: "https://www.googleapis.com/oauth2/v1/tokeninfo",
      userInfoUrl: "https://www.googleapis.com/oauth2/v3/userinfo",
      clientId: process.env.GOOGLE_CLIENT_ID,
      secret: process.env.GOOGLE_SECRET_ID,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      testEmail: process.env.GOOGLE_TEST_EMAIL,
      testSocialId: process.env.GOOGLE_TEST_ID,
    },

    apple: {
      url: "https://appleid.apple.com/auth/token",
      jwksUrl: "https://appleid.apple.com/auth/keys",
      clientId: process.env.GOOGLE_CLIENT_ID,
      secret: process.env.GOOGLE_SECRET_ID,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      testEmail: process.env.GOOGLE_TEST_EMAIL,
      testSocialId: process.env.GOOGLE_TEST_ID,
    },
  },
  redisUrl:
    process.env.REDIS_SERVER_HOST_URL ||
    "redis-19787.c1.ap-southeast-1-1.ec2.cloud.redislabs.com",
  redisPort: Number(process.env.REDIS_PORT) || 19787,
  redisPassword:
    process.env.REDIS_PASSWORD || "KJxoS6UyMX4kVxKK5vcF1HJaHUDTX7MG",
  fileUpload: {
    default: process.env.DEFAULT_STORAGE || "s3",
    gcs: {
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
      keyFile: process.env.GOOGLE_CLOUD_KEYFILE,
      bucket: process.env.GOOGLE_CLOUD_STORAGE_BUCKET,
    },
    s3: {
      key: process.env.AWS_ACCESS_KEY,
      secret: process.env.AWS_SECRET_KEY,
      bucket: process.env.AWS_BUCKET,
      region: process.env.AWS_REGION,
    },
  },
  termii: {
    url: process.env.TERMI_API_URL,
    apikey: process.env.TERMI_API_KEY,
    secretkey: process.env.TERNMII_SECRET_KEY,
    senderId: process.env.TERMII_SENDER_ID,
  },
  email: {
    noReply: { email: "no-reply@geenus.app", name: "Geenus" },
    mailOption: "sendgrid",
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
      contactFormRecipient: process.env.CONTACT_FORM_EMAIL_RECIPIENT,
    },
    postmark: {
      apiKey: process.env.POSTMARK_API_KEY,
      url: process.env.POSTMARK_BASE_URL,
    },
  },
  microServices: {
    worker: {
      url: process.env.WORKER_SERVICE,
    },
  },
  data: {
    userCategoryTypes: ["student", "job-seeker", "professional", "others"],
    aiDefaultType: "Ai",
    planDuration: ["month", "year"],

    subscriptionStatus: ["pending", "active", "expired", "cancelled"],
    paymentOption: ["paystack", "rave", "bank-transfer", "card", "cash"],
    transactionStatus: [
      "initiated",
      "pending",
      "success",
      "failed",
      "abandoned",
      "cancelled",
      "duplicate",
    ],
  },
});
