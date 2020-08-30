import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppGateway } from './app.gateway';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/liveStream', { useNewUrlParser: true }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}