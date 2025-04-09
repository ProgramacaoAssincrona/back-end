import { Controller, Get } from "@nestjs/common";
import { FindProductsService } from "../service/find-products.service";

@Controller()
export class FindProductsController {
    constructor(private readonly findProductsService: FindProductsService){}

    @Get('/products/:name')
    async findProducts(name: string) {
        return await this.findProductsService.findProducts(name);
    }
}