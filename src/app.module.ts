import { Module } from '@nestjs/common';
import { ProductsModule } from './api/products/products.module';
import { CategoriesModule } from './api/categories/categories.module'

@Module({
  imports: [
    ProductsModule, 
    CategoriesModule
  ],
})

export class AppModule {}
