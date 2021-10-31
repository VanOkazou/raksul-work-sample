import type { Quantity, BusinessDay } from "services/prices";

export type SelectedPrice = {
  businessDay: BusinessDay;
  price: number;
  quantity: Quantity;
};
