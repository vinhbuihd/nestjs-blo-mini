import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('posts')
  getPosts(): Promise<Post[]> {
    return this.appService.getPosts();
  }
}
