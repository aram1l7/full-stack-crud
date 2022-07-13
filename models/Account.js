const fs = require("fs");
const path = require("path");
class Account {
  static async getAll() {
    let accounts = fs.readFileSync(
      path.join(__dirname, "..", "db", "accounts.json"),
      (err, data) => {
        if (err) throw err;
        return data;
      }
    );
    return JSON.parse(accounts);
  }
  static async getById(id) {
    const data = await this.getAll();
    const account = data.accounts.find((el) => el.id === id);
    return account;
  }
}

module.exports = Account;
