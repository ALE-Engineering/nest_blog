import {Controller, Get, Post, Body, Param, Put, Patch, Delete, NotFoundException} from '@nestjs/common';
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

  @Put(':id')
  async update(@Param('id') id: number, @Body() blog: Blog): Promise<Blog> {
    try{
      return await this.blogService.updateById(id, blog);
    }catch (error){
      if(error instanceof NotFoundException){
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.blogService.remove(id);
  }
}