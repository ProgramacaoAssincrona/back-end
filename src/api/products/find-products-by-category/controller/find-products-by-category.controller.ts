import { Controller, Get } from '@nestjs/common';
import { FindProductsByCategoryService } from '../service/find-produtcs-by-category.service';

@Controller('find-products-by-category')
export class FindProductsByCategoryController {
    constructor(private readonly findProductsByCategoryService: FindProductsByCategoryService){}

    @Get()
    findAll(): string {
        return this.findProductsByCategoryService.getFindAll()
    }   
}