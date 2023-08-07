import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PGBaseService, Book } from "models";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class BookService extends PGBaseService {
  constructor(
    @InjectRepository(Book)
    protected repository: Repository<Book>,
    protected config: ConfigService
  ) {
    super(repository);
  }
}
