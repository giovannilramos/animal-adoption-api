import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('car', (table: Knex.TableBuilder) => {
        table.increments();
        table.uuid('uuid').notNullable();
        table.string('name', 255).notNullable();
        table.integer('year', 4).notNullable();
        table.string('model', 255).nullable();
        table.decimal('price').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('car');
}

