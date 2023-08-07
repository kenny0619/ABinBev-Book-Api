import { Global, Module } from "@nestjs/common";
import { BookController } from "./controller/book.controller";
import { Book } from "models";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookService } from "./service/book.service";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
