import { useQuery } from "react-query";
import { get } from "api";

/**
 * TODO: pagination
 *
 * This custom hook will fetch all cat data
 */
export function useGetCats() {
  const { data, status } = useQuery(["cats"], async () => {
    return get({
      path: `https://api.thecatapi.com/v1/images`,
      params: { limit: 50 },
      headers: { "x-api-key": process.env.REACT_APP_CAT_API_KEY },
    });
  });

  return {
    status,
    data,
  };
}
