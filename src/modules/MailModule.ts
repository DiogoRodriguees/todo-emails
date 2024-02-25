import { Module } from '@nestjs/common';
import { MailService } from 'src/services/MailService';

@Module({
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
