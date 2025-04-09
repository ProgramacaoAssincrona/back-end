import { Module } from '@nestjs/common';
import { FindProductsByCategoryModule } from './find-products-by-category/find-products-by-category.module';
import { FindManyProductsModule } from './find-many-products/find-many-products.module';
import { FindProductsModule } from './find-products/find-products.module';

@Module({
    imports: [
        FindProductsByCategoryModule, 
        FindManyProductsModule,
        FindProductsModule,
    ],
})
export class ProductsModule {};