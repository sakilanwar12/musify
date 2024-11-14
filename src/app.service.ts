import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    @Inject('Config')
    private config: {
      port: string;
    },
  ) {}

  getHello(): string {
    return ` this dev Host ${this.config.port}`;
  }
}
