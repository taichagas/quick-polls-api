import { ArrayNotEmpty, IsBoolean, IsNumber, IsUUID } from 'class-validator';

type Question = {
  title: string;
  options: Array<{
    text: string;
  }>;
};

export class CreatePollDto {
  @IsUUID()
  userId: string;

  @IsNumber()
  duration: number;

  @IsBoolean()
  published: boolean;

  @ArrayNotEmpty()
  questions: Question;
}
