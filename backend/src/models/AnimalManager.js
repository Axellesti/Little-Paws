const AbstractManager = require("./AbstractManager");

class AnimalManager extends AbstractManager {
  constructor() {
    super({ table: "animal" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where id = ?`,
      [id]
    );
    return rows;
  }

  async getUserAnimals(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
    return rows;
  }

  async create(animal) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (category, name, race, age, type, place, picture, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        animal.category,
        animal.name,
        animal.race,
        animal.age,
        animal.type,
        animal.place,
        animal.picture,
        animal.user_id,
      ]
    );
    return rows;
  }

  async update(animal) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET category=?, name=?, race=?, age=?, type=?, place=?, picture=? WHERE id=?`,
      [
        animal.category,
        animal.name,
        animal.race,
        animal.age,
        animal.type,
        animal.place,
        animal.picture,
        animal.id,
      ]
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

module.exports = AnimalManager;
