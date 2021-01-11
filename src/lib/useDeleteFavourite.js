import { useMutation } from "react-query";
import { del } from "api";

/**
 * Deletes an items from a users favourite list
 *
 * @param {integer} favourite_id the ID of the favourite entry
 */
export function useDeleteFavourite() {
  const { mutate, status, error } = useMutation(({ favourite_id }) =>
    del({
      path: `${process.env.REACT_APP_CAT_API_URL}/favourites/${favourite_id}`,
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
  );

  return {
    deleteFavourite: mutate,
    status,
    error,
  };
}
