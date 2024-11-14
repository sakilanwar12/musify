import {
    Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        error,
      );
    }
  }
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }
  @Get(':id')
  findOne(@Param('id') ParseIntPipe, id: number) {
    return `This action returns a #${id} song`;
  }

  @Put(':id')
  update(id: string) {
    return `This action updates a #${id} song`;
  }
  @Delete(':id')
  remove(id: string) {
    return `This action removes a #${id} song`;
  }
}
