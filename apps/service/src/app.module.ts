import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { configuration } from "../../../config";
import { TerminusModule } from "@nestjs/terminus";
import { MongoDbModule, PostgresModule } from "models";
import { BookModule } from "./book/book.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ["_env/service/.env.local", "_env/.env"],
      load: [configuration],
    }),
    MongoDbModule.init("mongodb.url"),
    TerminusModule,
    BookModule,
    PostgresModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
