import { NestFactory } from '@nestjs/core';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Blog } from './blog/blog.entity';
import { AppModule } from './app.module';

async function seedData() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const blogRepository = app.get(getRepositoryToken(Blog));

    const sampleBlogs = [
        {
            title: 'Erster Blogbeitrag',
            content: 'Inhalt des ersten Blogbeitrags.',
        },
        {
            title: 'Zweiter Blogbeitrag',
            content: 'Inhalt des zweiten Blogbeitrags.',
        },
    ];

    // Speichern in die DB
    for (const blogData of sampleBlogs) {
        const blog = blogRepository.create(blogData);
        await blogRepository.save(blog);
    }

    await app.close();
}

seedData().then(() => {
    console.log('Dateninitialisierung abgeschlossen.');
});