const userRepository = require("../repository/userRepository");

class UserController {
  constructor() {
    this.userRepository = userRepository;
  }
  async createUser(user) {
    await this.userRepository.createUser(user);
  }
  async loginIn(creds) {
    return await this.userRepository.validateAndGetUser(creds);
  }
  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }
  async getUserById(id) {
    return await this.userRepository.getUserById(id);
  }
}

module.exports = UserController;
