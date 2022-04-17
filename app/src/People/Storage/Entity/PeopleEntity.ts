export interface PeopleEntity {
  uuid: string;
  cpf?: string;
  name?: string;
  rg?: string;
  street?: string;
  district?: string;
  city?: string;
  country?: string;
  number?: string;
  birth_date?: Date;
  created_at?: Date;
  updated_at?: Date;
}
