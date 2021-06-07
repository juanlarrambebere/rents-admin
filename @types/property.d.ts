import "types";

declare module "types" {
  declare namespace Raw {
    declare type Property = {
      id: number;
      address: string;
      is_rented: boolean;
      municipal_registry: string;
    };
  }

  declare type Property = {
    id: number;
    address: string;
    isRented: boolean;
    municipalRegistry: string;
  };
}
