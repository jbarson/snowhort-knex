
exports.up = function(knex) {
  return knex.schema.createTable("educators", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .integer("student_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("students")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("educators");
};