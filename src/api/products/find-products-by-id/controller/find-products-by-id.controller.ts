import { Controller, Get, Param } from "@nestjs/common";
import { FindProductsByIdService } from "../service/find-products-by-id.service";

@Controller('find-products-by-id/:id')
export class FindProductsByIdController {
    constructor(private readonly findProductsByIdService: FindProductsByIdService) {}

    @Get()
    async findProductsById(@Param('id') id: string) {
        return await this.findProductsByIdService.findProductsById(id);
    }
}