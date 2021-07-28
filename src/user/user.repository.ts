import { BaseRepository } from '../common/repository/base.repository';
import { User } from './user.model';
import { userSchema } from './user.schema';

class UserRepository extends BaseRepository<User> {
    constructor() {
        super(userSchema);
    }
}

export const userRepository = new UserRepository();
