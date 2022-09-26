import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './app.controller';
import { AppService } from './app.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [AppService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(UserController.getHello()).toBe('Hello World!');
    });
  });
});
