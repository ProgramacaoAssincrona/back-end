import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FindProductsService {
    constructor(private readonly prisma: PrismaService) {}

    async findProducts(name: string): Promise<any> {
        
        if (name) { 
            const lowerName = name.toLowerCase();
            const produtos = await this.prisma.products.findMany({
                where: {
                    name: {
                        contains: lowerName,
                    }
                }
            });
    
            if (!(await produtos).length)
                throw new NotFoundException('Produtos não encontrados');

            return produtos;
        }
    }
}