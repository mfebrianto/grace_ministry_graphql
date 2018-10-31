
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('bible_schools', function(table) {
      table
          .increments('id')
          .notNullable()
          .primary();
      table.string('name').notNull();
      table.string('address').notNull();
      table.dateTime('created_at').defaultTo(knex.fn.now());
      table.dateTime('updated_at');
      table.string('created_by');
      table.string('updated_by');
    })
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('bible_schools')
      ]);
    };
