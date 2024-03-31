const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }

  async create(user) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password, username) VALUES (?, ?, ?)`,
      [user.email, user.hashedPassword, user.username]
    );
    return rows;
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows;
  }

  async update(user) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET email=?, hashed_password=?, username=? WHERE id=?`,
      [user.email, user.hashedPassword, user.username, user.id]
    );
    return rows;
  }

  async updateUsername(userInfos) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET username=? WHERE id=?`,
      [userInfos.username, userInfos.id]
    );
    return rows;
  }

  async destroy(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = UserManager;
