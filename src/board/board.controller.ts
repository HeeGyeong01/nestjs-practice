import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { PostEntity } from './entities/post.entity';

@Controller('posts')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAllPosts(): Promise<PostEntity[]> {
    return this.boardService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: number): Promise<PostEntity> {
    return this.boardService.getPostById(id);
  }

  @Post()
  createPost(@Body() postData: Partial<PostEntity>): void {
    this.boardService.createPost(postData);
  }

  @Patch(':id')
  updatePost(
    @Param('id') id: number,
    @Body() postData: Partial<PostEntity>,
  ): Promise<PostEntity> {
    return this.boardService.updatePost(id, postData);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number) {
    return this.boardService.deletePost(id);
  }
}
