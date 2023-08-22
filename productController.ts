import { IProductService } from '../services/IProductService';
import { injectable, inject } from 'inversify';

@injectable()
export class ProductController {
    constructor(@inject('IProductService') private productService: IProductService) {}

    async getAllProducts(request: any, response: any) {
        const products = await this.productService.getAllProducts();
        return response.response(products);
    }
}