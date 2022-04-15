import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('clients', (table: Knex.TableBuilder) => {
        table.increments();
        table.string('uuid').notNullable();
        table.string('name').notNullable();
        table.string('tax_id').notNullable();
        table.string('phone_number').nullable();
        table.string('email').notNullable();
        table.string('zip_code', 8).nullable();
        table.string('street', 255).nullable();
        table.string('number', 20).nullable();
        table.string('complement', 255).nullable();
        table.string('district', 255).nullable();
        table.string('city', 255).nullable();
        table.string('state', 2).nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('clients');
}

