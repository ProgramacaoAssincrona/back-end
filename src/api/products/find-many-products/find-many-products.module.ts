import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindManyProductsService } from './service/find-many-products.service';
import { FindManyProductsController } from './controller/find-many-products.controller';

@Module({
    imports: [],
    controllers: [FindManyProductsController],
    providers: [FindManyProductsService, PrismaService],
})
export class FindManyProductsModule {};