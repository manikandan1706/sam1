import { ContainerModule } from 'inversify';
import { autoProvide } from 'inversify-binding-decorators';
import { UserController } from '../modules/user/controllers/UserController';
import { ProductController } from '../modules/product/controllers/ProductController';
import { DatabaseConnection } from './database/Connection';

const containerModule = new ContainerModule((bind) => {
    autoProvide(bind, [
        UserController,
        ProductController,
        DatabaseConnection,
    ]);
});

export const ContainerConfig = [containerModule];