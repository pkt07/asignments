import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../Models/user.model';
import {VideoInfo} from "../Models/video.model";
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Video') private readonly videoModel: Model<VideoInfo>) { }
    async addUser(userData: User): Promise<User> {
        const newCustomer = await this.userModel(userData);
        return newCustomer.save();
    }
    async addVideo(videoInfo: VideoInfo): Promise<VideoInfo> {
        const data = await this.userModel.findOne({accessToken: videoInfo.accessToken})
        if(data.length != 0){
            const newVideo = await this.videoModel(videoInfo);
            return newVideo.save();
        }
        return ;
    }
}
