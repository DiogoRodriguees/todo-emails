import { Module } from '@nestjs/common';
import { MessageModule } from 'src/controllers/MessageModule';

@Module({
  imports: [MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
