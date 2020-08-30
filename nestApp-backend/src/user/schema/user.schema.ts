import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    accessToken:String,
    created_at: { type: Date, default: Date.now }
})