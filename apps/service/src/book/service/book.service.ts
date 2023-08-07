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

  /**
   * @param {Object} obj The request object
   * @return {Promise<Object>}
   */
  public async retrieveExistingResource(obj) {
    return await this.repository.findOne({ where: { isbn: obj.isbn } });
  }
}
