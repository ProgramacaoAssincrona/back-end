import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetAllCategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllCategories(): Promise<any> {
        const categorias = await this.prisma.categorias.findMany();

        if (!(await categorias).length)
            throw new NotFoundException('Categorias não encontradas');

        return categorias;
    }
}