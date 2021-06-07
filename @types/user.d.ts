import "types";

declare module "types" {
  declare namespace Raw {
    declare type ActiveContract = {
      id: number;
      first_name: string;
      last_name: string;
    };
  }

  declare type ActiveContract = {
    id: number;
    firstName: string;
    lastName: string;
  };
}
