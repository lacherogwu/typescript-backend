import { start } from './app.js';
import config, { validate } from '#config';

validate();
start(config.port);
