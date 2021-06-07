import "types";

declare module "types" {
  declare namespace Raw {
    declare type Rent = {
      id: number;
      amount: number;
      month: number;
      year: number;
      created_at: string;
      status: string;
    };
  }

  declare type Rent = {
    id: number;
    amount: number;
    month: number;
    year: number;
    createdAt: Date;
    status: string; // Convert to enum or type union
  };
}
