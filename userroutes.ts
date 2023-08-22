import { UserController } from '../controllers/UserController';

export function registerRoutes(server: any, controller: UserController) {
    server.route({
        method: 'GET',
        path: '/users',
        handler: (request: any, h: any) => controller.getAllUsers(request, h),
    });
}