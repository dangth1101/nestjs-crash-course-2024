import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/create_user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    return [{ user: 'test', email: 'test' }];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userPayload: CreateUserDTO) {
    console.log(userPayload);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
