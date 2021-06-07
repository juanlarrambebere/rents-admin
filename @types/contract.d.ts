import "types";

declare module "types" {
  declare namespace Raw {
    declare type Contract = {
      id: number;
      property_id: number;
      user_id: number;
      created_at: string;
      ends_at: string;
      is_active: boolean;
    };
  }

  declare type Contract = {
    id: number;
    propertyId: number;
    userId: number;
    createdAt: Date;
    endsAt: Date;
    isActive: boolean;
  };
}
