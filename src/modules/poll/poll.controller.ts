import { Controller, Post, Body, Inject, Get } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { CreatePollPort } from './ports/create-poll';
import { GetPollsPort } from './ports/get-polls';

// TODO: add port to it
@Controller('polls')
export class PollController {
  constructor(
    @Inject('CreatePollPort') private readonly createPoll: CreatePollPort,
    @Inject('GetPollsPort') private readonly getPolls: GetPollsPort,
  ) {}

  @Post()
  create(@Body() createPollDto: CreatePollDto) {
    // return createPollDto;
    return this.createPoll.execute(createPollDto);
  }

  @Get()
  findAll() {
    return this.getPolls.execute();
  }

  // @Get('/user/:id')
  // findOne(@Param('id') id: string) {
  //   return this.pollsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePollDto: UpdatePollDto) {
  //   return this.pollsService.update(+id, updatePollDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pollsService.remove(+id);
  // }
}
