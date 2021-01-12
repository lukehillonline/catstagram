import { useMutation } from "react-query";
import { post } from "api";

/**
 * Sends a vote, expects a data object like this:
 *   data: {
 *     image_id: imageId,
 *     value: 1,
 *   },
 *
 * If the value is 1 the vote will increase, if the value is 0 the vote
 * will decrease
 */
export function useCreateVote() {
  const { mutate, status, error, reset } = useMutation(
    ({ data, callback }) =>
      post({
        path: `${process.env.REACT_APP_CAT_API_URL}/votes`,
        data,
        headers: {
          "x-api-key": process.env.REACT_APP_CAT_API_KEY,
        },
      }),
    {
      onSuccess: (data, props) => {
        if (typeof props.callback === "function") {
          props.callback();
        }
      },
    }
  );

  return {
    createVote: mutate,
    status,
    error,
    reset,
  };
}
