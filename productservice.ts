import { injectable } from 'inversify';
import { IProductService } from './IProductService';

@injectable()
export class ProductService implements IProductService {
    readData(): string {
        return 'Product data from ProductService';
    }
}
