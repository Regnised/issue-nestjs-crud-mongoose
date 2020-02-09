import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('http://test:password123@ds052978.mlab.com:52978/test-projects'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
