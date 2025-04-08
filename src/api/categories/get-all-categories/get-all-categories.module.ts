import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllCategoriesController } from './controller/get-all-categories.controller';
import { GetAllCategoriesService } from './service/get-all-categories.service';


@Module({
    imports: [],
    controllers: [GetAllCategoriesController],
    providers: [GetAllCategoriesService, PrismaService],
})
export class FindManyCategoriesModule {};