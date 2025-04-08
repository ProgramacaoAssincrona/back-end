import { Module } from "@nestjs/common";
import { GetCartController } from "./controller/get-cart.controller";
import { GetCartService } from "./service/get-cart.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [],
  controllers: [GetCartController],
  providers: [GetCartService, PrismaService],
})

export class GetCartModule {}