import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindManyCategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    async findManyCategories(): Promise<any> {
        const categorias = await this.prisma.categories.findMany()

        if (!(await categorias).length)
            throw new NotFoundException('Categorias não encontradas');

        return categorias;
    }
}