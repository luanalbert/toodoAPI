exports.up = knex =>
  knex.schema.createTable("toodo", function (table) {
    table.increments("id");
    table.string("title", 50).notNullable();
    table.string("content", 255).notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTable("toodo");