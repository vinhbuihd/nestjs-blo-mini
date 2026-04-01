import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Phải export để module khác dùng được
})
export class PrismaModule {}
