import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
  Next,
} from "@nestjs/common";
import { NextFunction } from "express";
import { Connection } from "mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import {
  HealthCheck,
  HealthCheckService,
  HealthIndicatorResult,
  MicroserviceHealthIndicator,
  MongooseHealthIndicator,
  TypeOrmHealthIndicator,
} from "@nestjs/terminus";

@Controller()
export class AppController {
  constructor(
    private health: HealthCheckService,
    private m_service: MicroserviceHealthIndicator,
    private mongoService: MongooseHealthIndicator,
    private typeOrmService: TypeOrmHealthIndicator,
    private config: ConfigService,
    @InjectConnection()
    private readonly connection: Connection
  ) {}

  @Get("/ping")
  @HealthCheck()
  checkService() {
    return this.health.check([
      () =>
        Promise.resolve<HealthIndicatorResult>({
          api: {
            app: `${this.config.get("app.appName")}-api`,
            status: "up",
            environment: this.config.get("app.environment"),
          },
        }),
      () =>
        this.mongoService.pingCheck("mongoDB", {
          connection: this.connection,
        }),
      () => this.typeOrmService.pingCheck("postgres-db"),
    ]);
  }
}
