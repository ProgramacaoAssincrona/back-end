import { Module } from '@nestjs/common'; 
import { FindProductsByIdController } from './controller/find-products-by-id.controller';
import { FindProductsByIdService } from './service/find-products-by-id.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [],
  controllers: [FindProductsByIdController],
  providers: [FindProductsByIdService, PrismaService],
})

export class FindProductsByIdModule {}