import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany() as Promise<Post[]>;
  }

  async findOne(id: number): Promise<Post> {
    const post = (await this.prisma.post.findUnique({
      where: { id },
    })) as Post | null;

    if (!post) throw new NotFoundException(`Post with id ${id} not found`);

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = (await this.prisma.post.findUnique({
      where: { id },
    })) as Post | null;

    if (!post) throw new NotFoundException(`Post with id ${id} not found`);

    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    }) as Promise<Post>;
  }

  async remove(id: number): Promise<Post> {
    const post = (await this.prisma.post.findUnique({
      where: { id },
    })) as Post | null;

    if (!post) throw new NotFoundException(`Post with id ${id} not found`);

    return this.prisma.post.delete({
      where: { id },
    }) as Promise<Post>;
  }
}
