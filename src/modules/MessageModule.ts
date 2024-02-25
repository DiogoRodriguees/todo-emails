import { Module } from '@nestjs/common';
import { TaskConsumer } from 'src/consumers/TaskConsumer';
import { MailModule } from './MailModule';

@Module({
  imports: [MailModule],
  controllers: [TaskConsumer],
})
export class MessageModule {}
