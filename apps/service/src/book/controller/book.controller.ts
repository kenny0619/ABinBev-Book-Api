import { Controller } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ApiTags } from "@nestjs/swagger";
import { BookService } from "../service/book.service";
import { BaseController } from "models";

@ApiTags("Book")
@Controller("books")
export class BookController extends BaseController {
  constructor(protected service: BookService, protected config: ConfigService) {
    super(config, service);
  }
}
