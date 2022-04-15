import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('people', (table: Knex.TableBuilder) => {
        table.uuid('uuid').primary().notNullable().defaultTo(knex.raw('(UUID())'));
        table.string('name').notNullable();
        table.string('cpf', 11).notNullable();
        table.string('rg', 9).notNullable();
        table.string('cep', 8).notNullable();
        table.string('country').notNullable();
        table.string('number').notNullable();
        table.date('birth_date').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('people');
}