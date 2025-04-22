import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCartService {
    
    async execute() {
        return "Carrinho"
    }
}
