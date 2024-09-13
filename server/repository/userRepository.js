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

  async createUser(user) {
    const { password, phoneNumber, name, email } = user;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      await this.db.create_user([name, email, hashedPassword, phoneNumber]);
    } catch (err) {
      console.log(err);
    }
  }
};
