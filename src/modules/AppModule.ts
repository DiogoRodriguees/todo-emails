import { Module } from '@nestjs/common';
import { MailModule } from './MailModule';
import { MessageModule } from './MessageModule';

@Module({
  imports: [MailModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
