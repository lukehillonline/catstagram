import { useQuery } from "react-query";
import { get } from "api";

/**
 * TODO: pagination
 *
 * This custom hook will fetch all cat data
 */
export function useGetVotes() {
  const { data, status } = useQuery(["votes"], async () => {
    return get({
      path: `https://api.thecatapi.com/v1/votes`,
      params: { sub_id: "1234", limit: 1000 },
      headers: { "x-api-key": process.env.REACT_APP_CAT_API_KEY },
    });
  });

  return {
    status,
    data,
  };
}
