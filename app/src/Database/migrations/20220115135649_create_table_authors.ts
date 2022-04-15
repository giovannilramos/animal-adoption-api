import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('authors', (table: Knex.TableBuilder) => {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('(UUID())'));
        table.string('name').notNullable();
        table.string('short_name').notNullable();
        table.string('email').notNullable();
        table.date('birth_date').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('authors');
}

