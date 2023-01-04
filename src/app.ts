import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import globalError from '#middlewares/globalError.js';
import notFoundError from '#middlewares/notFoundError.js';
import authController from '#resources/auth/controller.js';

const app = express();

app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(morgan('tiny'));

// define all routes here
app.get('/todos', authController);

app.all('*', notFoundError);
app.use(globalError);

export function start(port: number) {
    app.listen(port, () => {
        console.log(`listening on http://localhost:${port}`);
    });
}
