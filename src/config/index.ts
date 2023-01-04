import 'dotenv/config';

type Config = {
    port: number;
    environment: 'development' | 'production';
    mongoUri: string;
};

function env(key: string, defaultVaule?: any) {
    return process.env[key] ?? defaultVaule;
}

const config: Config = {
    port: env('PORT', 3000),
    environment: env('NODE_ENV', 'development'),
    mongoUri: env('MONGO_URI', 'mongodb://localhost:27017'),
};

function error(message: string) {
    throw new Error(message + ' in .env file');
}

export function validate() {
    if (!config.port) {
        return error('PORT is required');
    }
    if (!config.mongoUri) {
        return error('MONGO_URI is required');
    }
}

export default config;
