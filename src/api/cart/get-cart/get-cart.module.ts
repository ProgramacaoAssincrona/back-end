import { Module } from "@nestjs/common";
import { GetCartController } from "./controller/get-cart.controller";
import { GetCartService } from "./service/get-cart.service";

@Module({
  controllers: [GetCartController],
  providers: [GetCartService],
})

export class GetCartModule {};