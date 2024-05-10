import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/create_user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDTO, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe');
    console.log('ValidateCreateUserPipe value', value);
    console.log('ValidateCreateUserPipe metadata', metadata);

    const parseToInt = parseInt(value.age.toString());
    if (isNaN(parseToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid data type for property age. Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${parseToInt} is a number. Returning...`);
    return { ...value, age: parseToInt };
  }
}
