
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('students', function(table) {
      table
          .increments('id')
          .notNullable()
          .primary();
      table.string('user_id').notNull();
      table.string('bible_school_id').notNull();
      table.dateTime('created_at').defaultTo(knex.fn.now());
      table.dateTime('updated_at');
      table.string('created_by');
      table.string('updated_by');
    })
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('students')
      ]);
    };
