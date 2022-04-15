import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('cats', (table: Knex.TableBuilder) => {
        table.uuid('uuid').primary().notNullable().defaultTo(knex.raw('(UUID())'));
        table.uuid('uuid_animals').notNullable();
        table.string('race').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

        table.foreign('uuid_animals').references('uuid').inTable('animals');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('cats');
}