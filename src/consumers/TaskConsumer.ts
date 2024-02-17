import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateTaskMessageDTO } from 'src/classes/dtos/CreateTaskMessageDTO';

@Controller()
export class TaskConsumer {
  @MessagePattern('CREATE_TASK')
  async consumeCreateTask(message: CreateTaskMessageDTO) {
    console.log(message.value);
  }
}
