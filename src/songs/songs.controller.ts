import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}
    @Post()
    create() {
        return this.songsService.create('My first Song');
    }
    @Get()
   findAll() {
       return this.songsService.findAll();
   }
   @Get(':id')
   findOne(id: string) {
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
