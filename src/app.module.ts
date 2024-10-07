import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './company/companies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CompaniesModule,
    MongooseModule.forRoot('https://test:password123@ds052978.mlab.com:52978/test-projects'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
