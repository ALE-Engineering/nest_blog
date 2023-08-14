import { Controller, Get, Post, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Post()
  async create(@Body() blog: Blog): Promise<Blog> {
    return this.blogService.create(blog);
  }
}