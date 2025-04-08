import { Controller, Get } from '@nestjs/common';
import { GetCartService } from '../service/get-cart.service';

@Controller('get-cart')
export class GetCartController {
    constructor(private readonly getCartservice: GetCartService){}

    @Get()
    async findProductsByCategory() {
        return this.getCartservice.getCart();
    }
}