import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindProductsByCategoryService {
    constructor(private readonly prisma: PrismaService) {}

    async findProductsByCategory(categoryId: string): Promise<any> {
        const produtos = await this.prisma.produtos.findMany({
            where: {
                categoria_id: Number(categoryId)
            }
        });

        if (!(await produtos).length)
            throw new NotFoundException('Produtos não encontrados');

        return produtos;
    }
}