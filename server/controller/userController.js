const UserRepository = require("../repository/userRepository");

class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(user) {
    await this.userRepository.createUser(user);
  }
  async loginIn(creds) {
    return await this.userRepository.validateAndGetUser(creds);
  }
}

module.exports = UserController;
