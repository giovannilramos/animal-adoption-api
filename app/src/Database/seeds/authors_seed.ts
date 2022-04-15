import {Knex} from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("authors").del();

    await knex("authors").insert([
        {
            name: "HEMICHARLY THIAGO DA SILVA MOREIRA",
            short_name: "MOREIRA S. T. H.",
            email: "hemicharlythiago@gmail.com",
            birth_date: "1993-04-03"
        },
        {
            name: "MARIO SERGIO CORTELLA",
            short_name: "CORTELLA S. M.",
            email: "mario.cortella@gmail.com",
            birth_date: "1954-03-05"
        }
    ]);
};
