import { IsString, Length } from 'class-validator';

export class UserCreateDto {
  @IsString({ message: 'Need to be string' })
  @Length(4, 30, { message: 'Count of symbols in the password min 4, max 30' })
  readonly name: string;
}
