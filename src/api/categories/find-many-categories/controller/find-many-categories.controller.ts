import { Controller, Get } from '@nestjs/common';
import { FindManyCategoriesService } from '../service/find-many-categories.service';

@Controller('find-many-categories')
export class FindManyCategoriesController {
    constructor(private readonly findManyCategoriesService: FindManyCategoriesService){}

    @Get()
    async findProductsByCategory() {
        return this.findManyCategoriesService.findManyCategories();
    }
}