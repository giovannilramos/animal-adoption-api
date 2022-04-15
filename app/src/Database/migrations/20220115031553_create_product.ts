import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('product', (table: Knex.TableBuilder) => {
        table.increments();
        table.uuid('uuid').notNullable();
        table.string('name', 255).notNullable();
        table.string('description').nullable();
        table.string('category', 255).nullable();
        table.double('price').notNullable();
        table.boolean('stock').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('product');
}

