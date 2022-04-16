export interface UserEntity {
  id?: number;
  uuid: string;
  name?: string;
  email?: string;
  password?: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
