import qs from "qs";

export function parseQueryParams(search: string) {
  return qs.parse(search, { ignoreQueryPrefix: true });
}

/**
 * Returns '' on empty object
 */
export function stringifyQuery(query: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return qs.stringify(query, {
    addQueryPrefix: true,
    skipNulls: true,
    arrayFormat: "brackets",
  });
}
