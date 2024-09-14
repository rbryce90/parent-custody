const db = require("../client/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class userRepository {
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
    const hashedPassword = await this.hashPassword(password);
    await this.db.users.insert({
      name,
      email,
      password: hashedPassword,
      phone_number: phoneNumber,
    });
  }
  async validateAndGetUser(creds) {
    const { email, password } = creds;
    const user = await this.db.users.findOne({ email });
    if (!user) {
      console.log("User does not exist");
      throw Error("Unauthorized");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return {
        id: user.id,
        name: user.name,
        email: user?.email,
        phone_number: user.phoneNumber,
        role: user.role,
      };
    }
    console.log("Wrong password");
    throw Error("Unauthorized");
  }

  async getAllUsers() {
    const data = await this.db.users.find({ role: "user" });
    const transformedData = data.map((user) => {
      const {
        id,
        name,
        email,
        phone_number: phoneNumber,
        date_of_creation: dateOfCreation,
        is_reviewed: isReviewed,
      } = user;
      return {
        id,
        name,
        email,
        phoneNumber,
        dateOfCreation,
        isReviewed,
      };
    });
    return transformedData;
  }
  async getUserById(userId) {
    const user = await this.db.users.findOne({ id: userId });
    const {
      id,
      name,
      email,
      phone_number: phoneNumber,
      date_of_creation: dateOfCreation,
      is_reviewed: isReviewed,
    } = user;
    return {
      id,
      name,
      email,
      phoneNumber,
      dateOfCreation,
      isReviewed,
    };
  }
}
module.exports = new userRepository();
