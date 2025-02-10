import { Module } from '@nestjs/common';
import { PollController } from './poll.controller';
import { PrismaPollRepository } from 'src/infra/persistence/prisma-poll.repository';
import { CreatePoll } from './use-cases/create-poll.service';
import { GetPolls } from './use-cases/get-polls.service';

@Module({
  controllers: [PollController],
  providers: [
    {
      provide: 'CreatePollPort',
      useClass: CreatePoll,
    },
    {
      provide: 'GetPollsPort',
      useClass: GetPolls,
    },
    {
      provide: 'PollRepository',
      useClass: PrismaPollRepository,
    },
  ],
})
export class PollsModule {}
