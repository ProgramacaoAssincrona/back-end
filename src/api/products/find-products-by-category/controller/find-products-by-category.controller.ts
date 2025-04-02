import { Controller, Get, Param } from '@nestjs/common';
import { FindProductsByCategoryService } from '../service/find-produtcs-by-category.service';

@Controller('find-products-by-category')
export class FindProductsByCategoryController {
    constructor(private readonly findProductsByCategoryService: FindProductsByCategoryService){}

    @Get(':categoryId')
    async findProductsByCategory(@Param('categoryId') categoryId: string) {
        return this.findProductsByCategoryService.findProductsByCategory(categoryId);
    }
}