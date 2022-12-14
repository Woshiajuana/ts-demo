import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class AppService {
  constructor(@Inject('NEST_SERVICE') private readonly client: ClientProxy) {
  }

  getHello(name: string) {
    return lastValueFrom(this.client.send<string>({ cmd: 'getHello' }, name));
  }
}
