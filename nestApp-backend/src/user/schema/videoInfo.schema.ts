import * as mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
    videoUrl: String,
    keyWords: [String],
    created_at: { type: Date, default: Date.now }
})