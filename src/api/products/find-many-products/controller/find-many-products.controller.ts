import { Controller, Get } from '@nestjs/common';
import { FindManyProductsService } from '../service/find-many-products.service';

@Controller('find-many-products')
export class FindManyProductsController {
    constructor(private readonly findManyProductsService: FindManyProductsService){}

    @Get()
    async findProductsByCategory() {
        return this.findManyProductsService.findManyProducts();
    }
}