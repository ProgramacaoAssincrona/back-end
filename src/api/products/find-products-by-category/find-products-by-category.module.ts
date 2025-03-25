import { Module } from '@nestjs/common';
import { FindProductsByCategoryController } from './controller/find-products-by-category.controller';
import { FindProductsByCategoryService } from './service/find-produtcs-by-category.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    imports: [],
    controllers: [FindProductsByCategoryController],
    providers: [FindProductsByCategoryService, PrismaService],
})
export class FindProductsByCategoryModule {};