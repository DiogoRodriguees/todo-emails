import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateTaskMessageDTO } from 'src/classes/dtos/CreateTaskMessageDTO';
import { MailService } from 'src/services/MailService';

@Controller()
export class TaskConsumer {
  constructor(private readonly mailService: MailService) {}

  @MessagePattern('CREATE_TASK')
  async consumeCreateTask(message: CreateTaskMessageDTO) {
    await this.mailService.sendMailTaskCreated(message);
  }
}
