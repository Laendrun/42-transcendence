import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // GET /users --> []
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  // GET /users/:id --> {...}
  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }
  // POST /users
  @Post()
  postUser() {
    console.log('Inserting new user...');
  }
  // PUT /users/:id --> {...}
  @Put('/:id')
  putUser(@Param('id') id: number) {
    console.log('Updating one property of user ' + id);
  }
  // PATCH /users/:id --> {...}
  @Patch('/:id')
  patchUser(@Param('id') id: number) {
    console.log('Updating all properties of user ' + id);
  }
  // DELETE /users/:id
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    console.log('Deleting user ' + id);
  }
}
