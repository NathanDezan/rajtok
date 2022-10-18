import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dezan:<password>@cluster0.fpik1s7.mongodb.net/?retryWrites=true&w=majority'), UsersModule],
})
export class AppModule {}