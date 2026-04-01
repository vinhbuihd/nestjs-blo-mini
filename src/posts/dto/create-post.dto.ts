import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Để hiện lên giao diện Swagger

export class CreatePostDto {
  @ApiProperty({ example: 'Học NestJS cho dân Frontend' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5, { message: 'Tiêu đề phải ít nhất 5 ký tự' })
  title: string;

  @ApiProperty({ example: 'Nội dung bài viết cực kỳ chi tiết...' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean;
}
