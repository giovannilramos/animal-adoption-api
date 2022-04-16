import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('user', (table: Knex.TableBuilder) => {
    table.increments();
    table.string('name').notNullable();
    table.string('uuid').notNullable();
    table.boolean('active').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('url_S3').nullable();
    table.string('role', 20).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user');
}
