import { Module } from '@nestjs/common';
import { TaskConsumer } from 'src/consumers/TaskConsumer';

@Module({
  controllers: [TaskConsumer],
})
export class MessageModule {}
