import { Module } from '@nestjs/common';
import { FindManyCategoriesModule } from './find-many-categories/find-many-products.module';

@Module({
    imports: [FindManyCategoriesModule],
})
export class CategoriesModule {};