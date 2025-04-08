import { Module } from '@nestjs/common';
import { FindManyCategoriesModule } from './get-all-categories/get-all-categories.module';

@Module({
    imports: [FindManyCategoriesModule],
})
export class CategoriesModule {};