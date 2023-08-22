import { ProductController } from '../controllers/ProductController';

export function registerRoutes(server: any, controller: ProductController) {
    server.route({
        method: 'GET',
        path: '/products',
        handler: (request: any, h: any) => controller.getAllProducts(request, h),
    });
}
