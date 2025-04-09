import { Module } from '@nestjs/common';
import { FindProductsController } from './controllers/find-produtcs.controller';
import { FindProductsService } from './service/find-products.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [FindProductsController],
  providers: [FindProductsService, PrismaService]
})
export class FindProductsModule {}