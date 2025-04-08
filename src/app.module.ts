import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './api/products/products.module';
import { CategoriesModule } from './api/categories/categories.module'
import { CartModule } from './api/cart/cart.module';

@Module({
  imports: [
    ProductsModule, 
    CategoriesModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
