import axios from "axios";
import { API_URL } from "./constants";

export default function Api() {
  return {
    async getAll() {
      const query = await axios.get(`${API_URL}/prices`);
      return query;
    },
  };
}
