import type { Request, Response, NextFunction } from 'express';
import type { HttpException } from '#utils/exceptions/http.js';

function globalError(
    err: HttpException,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).json({ message });
}

export default globalError;
