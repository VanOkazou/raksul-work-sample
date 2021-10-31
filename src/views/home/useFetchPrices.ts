import { useCallback } from "react";
import { useQuery } from "react-query";

import type { PaperSize } from "services/prices";
import client from "services/client";

export default function useFetchPrices(size?: PaperSize) {
  const apiClient = client();
  const fetcher = useCallback(
    () => apiClient.prices.getAll(size),
    [apiClient, size]
  );

  const { data, error, isFetching } = useQuery(["prices", size], fetcher, {
    keepPreviousData: true,
  });

  return {
    data,
    error,
    isFetching,
  };
}
