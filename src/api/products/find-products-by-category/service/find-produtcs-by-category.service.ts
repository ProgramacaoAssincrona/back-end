import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindProductsByCategoryService {
    constructor(private readonly prisma: PrismaService) {}

    async findProductsByCategory(categoryId: string): Promise<any> {
        const produtos = await this.prisma.products.findMany({
            where: {
                category_id: Number(categoryId)
            },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                promotional_price: true,
                image_url: true,
                stars: true,
                num_evaluate: true,
                categories: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        if (!(await produtos).length)
            throw new NotFoundException('Produtos não encontrados');

        return produtos;
    }
}