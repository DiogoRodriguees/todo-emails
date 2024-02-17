import { ConfigModule } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

ConfigModule.forRoot();

const MicroServiceConfig: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [process.env.MESSAGE_BROKER_URL as string],
    queue: process.env.MESSAGE_QUEUE_EMAILS as string,
  },
};

export default MicroServiceConfig;
