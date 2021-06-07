import "types";

declare module "types" {
  declare namespace Raw {
    declare type Payment = {
      id: number;
      rent_id: number;
      user_id: number;
      amount: number;
      created_at: string;
    };
  }

  declare type Payment = {
    id: number;
    rentId: number;
    userId: number;
    amount: number;
    createdAt: Date;
  };
}
