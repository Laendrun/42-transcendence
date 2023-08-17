import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): { id: number; name: string }[] {
    return [
      { id: 0, name: 'Laendrun' },
      { id: 1, name: 'Simon' },
    ];
  }
  getUser(id: number): { id: number; name: string } {
    return { id: 2, name: 'Bibi' };
  }
}
