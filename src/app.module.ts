import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { DevConfigService } from './common/providers/DevConfigService';
const devConfig = {
  port: 3000
  };
  const proConfig = {
  port: 400
  };
@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService,{
    provide:DevConfigService,
    useClass: DevConfigService,
  },{
    provide:"Config",
    useFactory:() => {
      if(process.env.NODE_ENV === "development"){
        return devConfig;
      } else {
        return proConfig;
      }
    }
  }],
  
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('songs');
      .forRoutes({
        path: 'songs',
        method: RequestMethod.GET,
      });
  }
}
