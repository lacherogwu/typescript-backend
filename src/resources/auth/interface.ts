import { Document } from 'mongoose';

export default interface Auth extends Document {
    email: string;
    password: string;
}
