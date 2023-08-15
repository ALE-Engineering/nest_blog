import {Controller, Get, Post, Body, Param, Put, Patch, Delete} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findById(@Param('id')id: number): Promise<Blog>{
    return this.blogService.findOneBy(id);
  }

  @Post()
  async create(@Body() blog: Blog): Promise<Blog> {
    return this.blogService.create(blog);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.blogService.remove(id);
  }
}