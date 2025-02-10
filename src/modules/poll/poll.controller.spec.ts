import { Test, TestingModule } from '@nestjs/testing';
import { PollsController } from './poll.controller';
import { CreatePoll } from './use-cases/create-poll.service';

describe('PollsController', () => {
  let controller: PollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollsController],
      providers: [CreatePoll],
    }).compile();

    controller = module.get<PollsController>(PollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
