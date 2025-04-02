import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindManyCategoriesService } from './service/find-many-categories.service';
import { FindManyCategoriesController } from './controller/find-many-categories.controller';

@Module({
    imports: [],
    controllers: [FindManyCategoriesController],
    providers: [FindManyCategoriesService, PrismaService],
})
export class FindManyCategoriesModule {};