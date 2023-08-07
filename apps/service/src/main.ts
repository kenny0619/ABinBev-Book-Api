import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { ResponseFilter, ValidationPipe } from "shared";
import { ConfigService } from "@nestjs/config";
import * as morgan from "morgan";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });
  app.use(morgan("tiny"));
  app.setGlobalPrefix("v1");
  app.useGlobalFilters(new ResponseFilter());
  app.useGlobalPipes(new ValidationPipe());
  const config = app.get(ConfigService);

  await app.listen(config.get<number>("port"), () =>
    Logger.log(`User Service is listening at port ${config.get("port")} ...`)
  );
}

bootstrap();
