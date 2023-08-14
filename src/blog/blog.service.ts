import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async create(blog: Blog): Promise<Blog> {
    return this.blogRepository.save(blog);
  }
}