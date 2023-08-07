import { BeforeInsert, Column, CreateDateColumn, Entity } from "typeorm";

import { BaseEntity } from "../../abstracts/base.entity";

@Entity()
export class Book extends BaseEntity<Book> {
  @Column({ type: "varchar", nullable: false })
  title: string;

  @Column({ type: "varchar", nullable: false })
  author: string;

  @Column({ type: "integer", nullable: false })
  pageCount: number;

  @Column({ type: "varchar", nullable: true })
  genre: string;

  @Column({ type: "float", default: 0 })
  price: number;

  @CreateDateColumn({ type: "timestamptz", default: () => "LOCALTIMESTAMP" })
  publishedAt: Date;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column()
  isbn: string;

  @Column({ type: "boolean", default: false })
  isAvailable: boolean;

  @BeforeInsert()
  protected beforeInsertFormatData() {
    // Perform any data formatting or processing before inserting into the database.
    // For example, you can convert the title and author to uppercase, etc.
    if (this.title) {
      this.title = this.title.toUpperCase();
    }

    if (this.author) {
      this.author = this.author.toUpperCase();
    }
  }

  public static config() {
    // Your configuration settings for the Book entity (if needed).
    return {
      idToken: "book", // You can change 'book' to any desired prefix for the entity ID.
      uniques: ["isbn"], // Define unique fields (if needed) to prevent duplicates.
      fillables: [
        "title",
        "author",
        "pageCount",
        "genre",
        "price",
        "publishedAt",
        "description",
        "isbn",
        "isAvailable",
      ],
      updateFillables: [
        "title",
        "author",
        "pageCount",
        "genre",
        "price",
        "publishedAt",
        "description",
        "isAvailable",
      ],
      dateFilters: ["publishedAt", "createdAt", "updatedAt"], // Fields to use for date filtering.
      hiddenFields: ["deleted"], // Fields to be hidden when fetching the entity.
    };
  }
}
