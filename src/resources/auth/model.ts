import { Schema, model } from 'mongoose';
import Auth from './interface.js';

const schema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<Auth>('Auth', schema);
