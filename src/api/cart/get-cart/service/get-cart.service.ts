import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GetCartService {
    constructor(private readonly prisma: PrismaService) {}

    async getCart(): Promise<any> {
        const cart = await this.prisma.cart.findMany()

        if (!(await cart).length)
            throw new NotFoundException('Categorias não encontradas');

        return cart;
    }
}