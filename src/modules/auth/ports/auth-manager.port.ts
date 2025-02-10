export interface AuthManager {
  isLoggedIn(req: Request): Promise<boolean>;
  hasAccess(userId: string, req: Request): Promise<boolean>;
}
