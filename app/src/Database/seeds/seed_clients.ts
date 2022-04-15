import {Knex} from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("clients").del();
    await knex("clients").insert([
        {id: 1, uuid:"48f4ee85-384f-4c60-998c-59b893a8422b", name: "HEMICHARLY THIAGO DA SILVA MOREIRA", tax_id: "40393244040", email: "hemicharly@bhut.com.br"},
        {id: 2, uuid:"de315c0e-1453-477c-be8f-f93c92cb83b0", name: "TIAGO MENDES", tax_id: "04909249052", email: "tiago@bhut.com.br"},
        {id: 3, uuid:"d8acd2c0-a854-46de-9593-d5bb04a8de43", name: "FELIPE MEDINA", tax_id: "79088655006", email: "felipe.medina@bhut.com.br"}
    ]);
}
