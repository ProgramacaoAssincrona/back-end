import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindProductsByIdService {
    constructor(private readonly prisma: PrismaService) {}

    async findProductsById(id: string): Promise<any> {
        const produtos = await this.prisma.products.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!produtos)
            throw new NotFoundException('Produtos não encontrados');

        return produtos;
    }
}