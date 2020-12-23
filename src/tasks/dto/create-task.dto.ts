import { User } from '../../users/user.entity';

export class CreateTaskDto {
  name: string;
  description: string;
  executors: User[];
}
