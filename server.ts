import 'reflect-metadata';
import { Container } from 'inversify';
import { Server as HapiServer } from '@hapi/hapi';
import ecoConfig from 'ecoconfig';
import * as fs from 'fs';
import * as path from 'path';
import { ContainerConfig } from './ContainerConfig';

const container = new Container();

// Automatically bind classes in the given directory
ContainerConfig.forEach((module) => container.load(module));

// Create a new Hapi server instance
const server = new HapiServer({
    port: 3000,
    host: 'localhost',
});

// Register routes for each module dynamically
const modulesDir = path.join(__dirname, '../modules');
const moduleDirs = fs.readdirSync(modulesDir);

for (const moduleDir of moduleDirs) {
    const routesPath = path.join(modulesDir, moduleDir, 'routes');
    const routesFiles = fs.readdirSync(routesPath);

    for (const routesFile of routesFiles) {
        const registerRoutes = require(path.join(routesPath, routesFile)).registerRoutes;
        const controllerName = routesFile.split('Routes.')[0];

        const controller = container.get<any>(controllerName + 'Controller');
        registerRoutes(server, controller);
    }
}

const init = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
