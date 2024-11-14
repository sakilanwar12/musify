import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { CONNECTION } from 'src/common/connection/constant';

@Module({
  controllers: [SongsController],
  providers: [SongsService,
    {
      provide: 'CONNECTION',
      useValue: CONNECTION
    }
  ]
})
export class SongsModule {
    
}
