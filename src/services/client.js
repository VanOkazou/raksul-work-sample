import priceApi from "./prices";

export default function client() {
  return {
    prices: priceApi(),
  };
}
