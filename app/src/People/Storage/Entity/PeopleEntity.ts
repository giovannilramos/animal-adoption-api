export interface PeopleEntity {
  uuid?: string;
  cpf?: string;
  name?: string;
  rg?: string;
  street?: string;
  district?: string;
  city?: string;
  country?: string;
  number?: string;
  birth_date?: Date;
  active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
