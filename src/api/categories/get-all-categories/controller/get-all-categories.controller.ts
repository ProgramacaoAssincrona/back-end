import { Controller, Get } from '@nestjs/common';
import { GetAllCategoriesService } from '../service/get-all-categories.service';

@Controller('get-all-categories')
export class GetAllCategoriesController {
    constructor(private readonly getAllCategoriesService: GetAllCategoriesService){}

    @Get()
    async findProductsByCategory() {
        return this.getAllCategoriesService.getAllCategories();
    }
}