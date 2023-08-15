import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
