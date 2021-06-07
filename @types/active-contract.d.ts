import "types";

declare module "types" {
  declare namespace Raw {
    declare type ActiveContract = {
      id: number;
      created_at: string;
      ends_at: string;
      user: User;
      rents: Rent[];
      payments: Payment[];
    };
  }

  declare type ActiveContract = {
    id: number;
    createdAt: string;
    endsAt: string;
    user: User;
    rents: Rent[];
    payments: Payment[];
  };
}
