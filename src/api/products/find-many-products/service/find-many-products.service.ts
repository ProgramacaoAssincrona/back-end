import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindManyProductsService {
    constructor(private readonly prisma: PrismaService) {}

    async findManyProducts(): Promise<any> {
        const produtos = await this.prisma.products.findMany();

        if (!(await produtos).length)
            throw new NotFoundException('Produtos não encontrados');

        return produtos;
    }
}