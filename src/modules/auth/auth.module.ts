import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClerkAuth } from './adapters/clerk.service';

@Module({
  providers: [
    AuthService,
    {
      provide: 'AuthManager',
      useClass: ClerkAuth,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
