const UserRepository = require("../repository/userRepository");

class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(user) {
    await this.userRepository.createUser(user);
  }
}

module.exports = UserController;
