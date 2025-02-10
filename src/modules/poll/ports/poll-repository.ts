export interface PollRepository {
  create(data: any): Promise<any>;
  get(): Promise<any[]>;
}
