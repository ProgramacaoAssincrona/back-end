import { Module } from '@nestjs/common';
import { ProductsModule } from './api/products/products.module';
import { CategoriesModule } from './api/categories/categories.module'
import { CartModule } from './api/cart/cart.module';

@Module({
  imports: [
    ProductsModule, 
    CategoriesModule,
    CartModule,
  ],
})

export class AppModule {}
