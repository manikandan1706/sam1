import { Server, ServerRegisterPluginObject } from '@hapi/hapi';
import { Container } from 'inversify';
import { UserController } from '../controllers/UserController';
import { ContainerConfig } from '../../ioc/ContainerConfig';

export const userPlugin: ServerRegisterPluginObject<any> = {
    name: 'userPlugin',
    version: '1.0.0',
    register: async (server: Server, options: any) => {
        const container = new Container();
        container.load(...ContainerConfig);

        const userController = container.get<UserController>(UserController);
        const userRoutes = require('../routes/UserRoutes');
        userRoutes.registerRoutes(server, userController);
    },
};
