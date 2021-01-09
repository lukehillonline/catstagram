import { useQuery } from "react-query";
import { get } from "api";

export function useGetCats() {
  console.log(process.env.REACT_APP_CAT_API_URL);
  const { data, status } = useQuery(
    ["cats"],
    async () => {
      return get({
        path: `${process.env.REACT_APP_CAT_API_URL}/images/search`,
        headers: { "x-api-key": process.env.REACT_APP_CAT_API_KEY },
      });
    },
    {
      refetchInterval: 10 * 60000,
    }
  );

  return {
    status,
    data,
  };
}
