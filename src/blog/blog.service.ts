import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOneBy(id: number): Promise<Blog | undefined> {
    return this.blogRepository.findOneBy({id});
  }

  async updateById(id: number, blog: Blog): Promise<Blog | undefined> {
    const existingBlog = await this.blogRepository.findOneBy({id});
    if (!existingBlog) {
      throw new NotFoundException(`Der Blog mit der ID ${id} wurde nicht gefunden!`);
    }
    const updated = { ...existingBlog, ...blog };
    await this.blogRepository.update(id, updated);
    return this.blogRepository.findOneBy({id});
  }

  async create(blog: Blog): Promise<Blog> {
    return this.blogRepository.save(blog);
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.blogRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Der Blog mit der ID ${id} wurde nicht gefunden!`);
    }
  }
}