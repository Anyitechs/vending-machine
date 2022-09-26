import { Module } from '@nestjs/common';
import { UserController, MaintainerController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UserController, MaintainerController],
  providers: [AppService],
})
export class AppModule {}
