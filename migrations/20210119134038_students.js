
exports.up = function(knex) {
  return knex.schema.createTable("students", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
   })
};

exports.down = function(knex) {
  return knex.schema.dropTable("students");
};
