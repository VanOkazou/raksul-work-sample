import { useCallback } from "react";
import { useQuery } from "react-query";

import client from "services/client";

export default function useFetchPrices() {
  const apiClient = client();
  const fetcher = useCallback(() => apiClient.prices.getAll(), [apiClient]);

  const { data, error, isFetching } = useQuery(["prices"], fetcher);

  return {
    data,
    error,
    isFetching,
  };
}
