import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindProductsByCategoryService {
    constructor(private readonly prisma: PrismaService) {}

    async findProductsByCategory(categoryId: number): Promise<any> {
        const produtos = await this.prisma.products.findMany({
            where: {
                category_id: categoryId,
            }
        });

        if (!(await produtos).length)
            throw new NotFoundException('Produtos não encontrados');

        return produtos;
    }
}