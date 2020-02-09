import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserService } from './user.service';
import { UserSchema } from './schemas/user.schema';
import { IUser } from './interfaces/user.interface';

@Crud({
  model: {
    type: UserSchema,
  },
})
@Controller('user')
export class UserController implements CrudController<IUser> {
  constructor(public service: UserService) {
  }
}
