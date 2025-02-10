import { Injectable } from '@nestjs/common';
import { PollRepository } from '../../modules/poll/ports/poll-repository';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaPollRepository implements PollRepository {
  private static prisma: PrismaClient | null = null;

  get() {
    const prisma = PrismaPollRepository.getPrismaInstance();
    return prisma.poll.findMany({
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
  }

  create(data: any): Promise<any> {
    console.log({ data });
    const prisma = PrismaPollRepository.getPrismaInstance();
    return prisma.poll.create({
      data: {
        userId: '8f60548c-7efe-4881-82b5-715a252ebd08',
        duration: 12,
        published: false,
        questions: {
          create: [
            {
              title: 'Qual a melhor cidade do Brasil?',
              options: {
                create: [
                  { text: 'Salvador' },
                  { text: 'Rio de Janeiro' },
                  { text: 'São Paulo' },
                ],
              },
            },
          ],
        },
      },
    });
  }

  static getPrismaInstance() {
    if (PrismaPollRepository.prisma === null) {
      PrismaPollRepository.prisma = new PrismaClient();
      return PrismaPollRepository.prisma;
    }
    return PrismaPollRepository.prisma;
  }
}
