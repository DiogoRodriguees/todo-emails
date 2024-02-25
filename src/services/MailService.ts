import { Injectable } from '@nestjs/common';
import { CreateTaskMessageDTO } from 'src/classes/dtos/CreateTaskMessageDTO';

@Injectable()
export class MailService {
  async sendMailTaskCreated(message: CreateTaskMessageDTO) {
    console.log(message);
  }
}
