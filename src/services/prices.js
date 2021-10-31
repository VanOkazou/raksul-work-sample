import axios from "axios";
import { API_URL } from "./constants";

export type PaperSize = "a4" | "a5" | "b4" | "b5";
type BusinessDay = 1 | 2 | 3 | 4 | 5;
type Quantity = 10 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface Price {
  business_day: BusinessDay;
  price: number;
  quantity: Quantity;
}

export interface GetAllResponse {
  paper_size: PaperSize;
  prices: Price[][];
}

export interface PriceApi {
  getAll(paperSize?: PaperSize): Promise<GetAllResponse>;
}

export default function priceApi(): PriceApi {
  return {
    async getAll(paperSize = "a4") {
      const {
        data: { paper_size, prices },
      } = await axios.get(`${API_URL}/prices?paper_size=${paperSize}`);

      return {
        prices: prices,
        paperSize: paper_size,
      };
    },
  };
}
