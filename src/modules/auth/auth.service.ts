import { Inject, Injectable } from '@nestjs/common';
import { AuthManager } from './ports/auth-manager.port';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AuthManager') private readonly authManager: AuthManager,
  ) {}

  public async userIsLoggedIn(req: Request) {
    return await this.authManager.isLoggedIn(req);
  }
}
