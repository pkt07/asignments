
import { Controller, Get, Res, HttpStatus, Post, Body,Headers, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import {User} from '../Models/user.model';
import {VideoInfo} from "../Models/video.model";
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    // add a user
    @Post('/create')
    async addCustomer(@Res() res, @Body() userInfo: User) {
        const customer = await this.userService.addUser(userInfo);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            status:200,
            customer
        })
    }
    @Post('/videoInfo')
    async addVideo(@Res() res, @Body() videoInfo: VideoInfo) {
        const data = await this.userService.addVideo(videoInfo);
        return res.status(HttpStatus.OK).json({
            message: "Video added successfully",
            status:200,
            data
        })
    }
}
