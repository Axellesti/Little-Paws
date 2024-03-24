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

  async create(animal) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (category, name, race, age, type, place, id_picture) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        animal.category,
        animal.name,
        animal.race,
        animal.age,
        animal.type,
        animal.place,
        animal.picture,
      ]
    );
    return rows;
  }

  async update(animal) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET category=?, name=?, race=?, age=?, type=?, place=?, id_picture=? WHERE id=?`,
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
