import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'src/common/connection/constant';

@Injectable()
export class SongsService {
    constructor(
        @Inject('CONNECTION') 
        connection:Connection
    ){
        console.log("Connections String",connection.CONNECTION_STRING);
    }
    private readonly songs:string[] = [];
    create(song:any) {
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        return this.songs;
    }
}
