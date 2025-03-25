import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindProductsByCategoryService {
    constructor(private readonly prisma: PrismaService) {}

    async findProductsByCategory(categoryId: number): Promise<any> {
        const produtos = this.prisma.produtos.findMany({
            where: {
                categoria_id: categoryId
            }
        });

        if (!(await produtos).length)
            throw new NotFoundException('Produtos não encontrados');

        return produtos;
    }
}