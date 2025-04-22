import { Module } from "@nestjs/common";
import { GetCartModule } from "./get-cart/get-cart.module";

@Module({
  imports: [GetCartModule],
})

export class CartModule {};