import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('animals', (table: Knex.TableBuilder) => {
        table.uuid('uuid').primary().notNullable().defaultTo(knex.raw('(UUID())'));
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('sex', 1).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('animals');
}