import { PartialType } from '@nestjs/mapped-types';
import { CreateuUserDto } from './create-user.dto';

export class UpdateAuthDto extends PartialType(CreateuUserDto) {}
