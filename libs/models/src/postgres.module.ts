import { Module } from "@nestjs/common";
import * as path from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        const dbDefaultType = config.get("rdbms.default");
        const dbConfig = config.get("rdbms");

        const migrationsDir = dbConfig[dbDefaultType].migrationsDir
          ? path.join(__dirname, dbConfig[dbDefaultType].migrationsDir)
          : path.join(__dirname, "..", "migrations");

        const migrationsPath = path.join(migrationsDir, "**{.ts,.js}");

        return {
          type: dbDefaultType,
          host: dbConfig[dbDefaultType].host,
          port: dbConfig[dbDefaultType].port,
          username: dbConfig[dbDefaultType].username,
          password: dbConfig[dbDefaultType].password,
          database: dbConfig[dbDefaultType].name,
          entities: [],
          autoLoadEntities: true,
          synchronize: true,
          keepConnectionAlive: false,
          migrations: [migrationsPath],
          cli: {
            migrationsDir: "src/migrations",
          },
          extra: {
            connectionLimit: 15,
          },
          logging:
            config.get("environment") === "production"
              ? ["error", "migration", "warn"]
              : false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {}
