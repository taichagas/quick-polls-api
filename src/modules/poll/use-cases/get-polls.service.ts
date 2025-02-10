import { Inject, Injectable } from '@nestjs/common';
import { GetPollsPort } from '../ports/get-polls';
import { PollRepository } from '../ports/poll-repository';

@Injectable()
export class GetPolls implements GetPollsPort {
  constructor(
    @Inject('PollRepository') private pollRepository: PollRepository,
  ) {}

  execute(): Promise<any[]> {
    return this.pollRepository.get();
  }
}
