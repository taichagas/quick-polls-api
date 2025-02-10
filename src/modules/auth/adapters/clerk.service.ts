import { Injectable } from '@nestjs/common';
import { AuthManager } from '../ports/auth-manager.port';
import { ClerkClient, createClerkClient } from '@clerk/backend';

@Injectable()
export class ClerkAuth implements AuthManager {
  static client: ClerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  });

  async isLoggedIn(req: Request): Promise<boolean> {
    const { isSignedIn } = await ClerkAuth.client.authenticateRequest(req);
    return isSignedIn;
  }

  async hasAccess(userId: string, req: Request): Promise<boolean> {
    // const isLoggedIn = this.isLoggedIn(req);
    // if (!isLoggedIn) {
    //   throw Error('User must be logged in.');
    // }
    throw Error('not implemented');
  }
}
