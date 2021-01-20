const bookshelf = require("../bookshelf");

const Student = bookshelf.model("Student", {
  tableName: "students",
  educators: function() {
    return this.hasMany("Educator");
  }
})

module.exports = Student