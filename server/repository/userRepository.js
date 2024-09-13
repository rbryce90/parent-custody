const db = require("../client/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = class userRepository {
  constructor() {
    this.db = null;
    this.initDb();
  }

  async initDb() {
    this.db = await db();
  }

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async createUser(user) {
    const { password, phoneNumber, name, email } = user;
    const hashedPassword = this.hashPassword(password);
    await this.db.create_user([name, email, hashedPassword, phoneNumber]);
  }
  async validateAndGetUser(creds) {
    const { email, password } = creds;
    const user = await this.db.get_user_by_email([email]);
    if (!user.length) {
      throw Error("Unauthorized");
    }
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (isMatch) {
      delete user[0].password;
      return user[0];
    }
    throw Error("Unauthorized");
  }
};
