import { Module } from '@nestjs/common';
import { FindProductsByCategoryModule } from './find-products-by-category/find-products-by-category.module';

@Module({
    imports: [FindProductsByCategoryModule],
})
export class ProductsModule {};