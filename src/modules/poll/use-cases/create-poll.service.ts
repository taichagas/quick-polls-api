import { Inject, Injectable } from '@nestjs/common';
import { CreatePollDto } from '../dto/create-poll.dto';
import { CreatePollPort } from '../ports/create-poll';
import { PollRepository } from '../ports/poll-repository';

// TODO: implement usecase
@Injectable()
export class CreatePoll implements CreatePollPort {
  constructor(
    @Inject('PollRepository') private readonly pollRepository: PollRepository,
  ) {}

  async execute(createPollDto: CreatePollDto) {
    try {
      // TODO: add entity
      await this.pollRepository.create(createPollDto);
    } catch (error) {
      console.error(error);
    }
  }
}
