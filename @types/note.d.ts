import "types";

declare module "types" {
  declare namespace Raw {
    declare type Note = {
      id: number;
      text: string;
      created_at: string;
    };
  }

  declare type Note = {
    id: number;
    text: string;
    createdAt: Date;
  };
}
