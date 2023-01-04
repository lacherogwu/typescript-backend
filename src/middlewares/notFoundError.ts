import type { Request, Response, NextFunction } from 'express';
import { error } from '#utils/exceptions/http.js';

function notFoundError(req: Request, _res: Response, next: NextFunction) {
    return next(error(404, `Can't find ${req.originalUrl} on this server!`));
}

export default notFoundError;
