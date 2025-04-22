import { Controller, Get } from "@nestjs/common";
import { GetCartService } from "../service/get-cart.service";

@Controller()
export class GetCartController {
    constructor(private readonly service: GetCartService) {}

    @Get('get-cart')
    async handle() {
        return this.service.execute();
    }
}