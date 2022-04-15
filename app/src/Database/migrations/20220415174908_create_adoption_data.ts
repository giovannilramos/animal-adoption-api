import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('adoption_data', (table: Knex.TableBuilder) => {
        table.uuid('uuid').primary().notNullable().defaultTo(knex.raw('(UUID())'));
        table.uuid('uuid_animals').notNullable();
        table.uuid('uuid_people').notNullable();
        table.date('adoption_date').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

        table.foreign('uuid_animals').references('uuid').inTable('animals');
        table.foreign('uuid_people').references('uuid').inTable('people');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('adoption_data');
}