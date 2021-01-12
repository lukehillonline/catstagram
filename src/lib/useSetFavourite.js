import { useMutation } from "react-query";
import { post } from "api";

/**
 * Adds an image to a users favourite list, expects a data object like this:
 *   data: {
 *     image_id: imageId,
 *   },
 */
export function useSetFavourite() {
  const { mutate, status, error, data, reset } = useMutation(({ data }) =>
    post({
      path: `https://api.thecatapi.com/v1/favourites`,
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
    reset,
  };
}
