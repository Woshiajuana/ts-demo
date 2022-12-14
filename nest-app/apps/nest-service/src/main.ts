import { NestFactory } from '@nestjs/core';
import { NestServiceModule } from './nest-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(NestServiceModule, {
    transport: Transport.TCP,
    options: {
      port: 4000
    }
  });
  await app.listen();

  console.log(`nest service is listning`)
}
bootstrap();
