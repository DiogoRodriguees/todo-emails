import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import MicroServiceConfig from './configs/MicroserviceConfig';
import { AppModule } from './modules/AppModule';

async function Main() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(MicroServiceConfig);
  app.startAllMicroservices();

  await app.listen(process.env.PORT || 3000);
}
Main();
