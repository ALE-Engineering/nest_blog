import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest_blog',
      password: 'nest_blog',
      database: 'nest_db_blog',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
