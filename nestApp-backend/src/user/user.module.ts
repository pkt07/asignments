import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from '../user/schema/user.schema';
import { VideoSchema } from './schema/videoInfo.schema';
@Module({
  imports:[MongooseModule.forFeature([
    {
    name:'User',
    schema:UserSchema,
    collection:'user'
  },
  {
    name:'Video',
    schema:VideoSchema,
    collection:'videoInfo'
  },
])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
