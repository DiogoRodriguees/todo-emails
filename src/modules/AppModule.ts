import { Module } from '@nestjs/common';
import { MessageModule } from 'src/controllers/MessageModule';
import { MailModule } from './MailModule';

@Module({
  imports: [MailModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
