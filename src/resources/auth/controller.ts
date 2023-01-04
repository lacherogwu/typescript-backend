import { Router, Request, Response, NextFunction } from 'express';
import Controller from '#utils/interfaces/controller.js';
import { error } from '#utils/exceptions/http.js';
import validate from './validation.js';
import service from './service.js';

function create() {}

function router(routes: ['post' | 'get', string, () => void][]): Router {
    const router = Router();
    routes.forEach((route) => {
        const [method, path, handler] = route;
        router[method](path, handler);
    });
    return router;
}

export default router([
    ['get', '/:id', create], //
    ['post', '/:id', create], //
]);
