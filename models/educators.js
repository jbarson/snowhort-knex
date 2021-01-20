const bookshelf = require("../bookshelf");

const Educator = bookshelf.model("Educator", {
  tableName: "educators",
  educators: () => this.belongsTo("Student")
})

module.exports = Educator