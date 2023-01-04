export const HttpErrorStatusCodes = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
} as const;

export type StatusCodes =
    typeof HttpErrorStatusCodes[keyof typeof HttpErrorStatusCodes];

export class HttpException extends Error {
    status: number;
    message: string;
    isOperational: true;

    constructor(status: StatusCodes, message: string) {
        super(message);
        this.status = status;
        this.message = message;
        this.isOperational = true;
    }
}

export function error(status: StatusCodes, message: string) {
    return new HttpException(status, message);
}
