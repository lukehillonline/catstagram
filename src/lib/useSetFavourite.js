import { useMutation } from "react-query";
import { post } from "api";

export function useSetFavourite() {
  const { mutate, status, error, data } = useMutation(({ data }) =>
    post({
      path: `${process.env.REACT_APP_CAT_API_URL}/favourites`,
      data,
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
  );

  return {
    setFavourite: mutate,
    status,
    error,
    data,
  };
}
