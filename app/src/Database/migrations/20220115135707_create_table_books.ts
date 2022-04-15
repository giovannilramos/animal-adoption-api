import {Knex} from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('books', (table: Knex.TableBuilder) => {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('(UUID())'));
        table.uuid('author_id')
            .index()
            .references('id')
            .inTable('authors')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('title').notNullable();
        table.string('subtitle').notNullable();
        table.string('abstract').notNullable();
        table.string('url_book').notNullable();
        table.date('publication_date').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('books');
}

